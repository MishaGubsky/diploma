require 'nokogiri'
require 'json'
require 'date'
require 'byebug'
require 'active_support/inflector'
require 'state_machines'
require_relative './../../page_loader'

class Parser
  attr_accessor :static_processed
  attr_reader :publication, :state, :error_description

  state_machine :state, initial: ->(parser) {parser.static_processed ? :parse_content_success : :scrape_pending} do
    state :scrape_pending, :scrape_content_failure,
     :scrape_content_success, :parse_content_failure, :parse_content_success
    event :failure_to_get_page do
      transition :scrape_pending => :scrape_content_failure
    end

    event :success_to_get_page do
      transition :scrape_pending => :scrape_content_success
    end

    event :failure_to_parse_publication do
      transition :scrape_content_success => :parse_content_failure
    end

    event :success_to_parse_publication do
      transition :scrape_content_success => :parse_content_success
    end

    after_transition on: :failure_to_get_page, do: :raise_scraping_error

    after_transition :scrape_content_success => :parse_content_success do |parser, transition|
      parser.static_processed = true
    end

    after_transition on: :failure_to_parse_publication, do: :raise_parsing_error
  end

  def initialize(article,
      options: {},
      headers: {},
      publication_attributes: nil)
    @article = article
    @domain = @article.resource.domain
    @agent = PageLoader.new(@domain, response: options[:response], headers: headers)
    @full_url = get_full_url
    resource_id = @article.resource.id
    @publication = Publication.find_or_create(article_id: @article.id, resource_id: resource_id)
    @static_metric = StaticMetric.find_or_create(publication_id: @publication.id)
    @publication_attributes = publication_attributes
    @static_attributes = %w{
      posted_weekday
      is_text
      time_delta
    }
    @external_attributes = []
    @dynamic_attributes = [] # You must override this one AND add methods with name's metric
    @related_entities = {
      'authors' => {resource_id: resource_id},
      'keywords' => {},
      'category' => {}
    }
    @static_processed = @article.static_processed
    super()
    @body = @agent.load_page @full_url.gsub(@domain, '')
    create_methods_for_add_related_entity
  end

  def check_status_page
    response_code == 200 ? success_to_get_page : failure_to_get_page
  end

  def parse_publication
    begin
      publication_metrics = parse_publication_attributes
      static_metrics = parse_static_metrics
      add_related_entities(publication_metrics)
    rescue Exception => e
      @error_description = e.message
      failure_to_parse_publication
    end
    begin
      @static_metric.update(static_metrics)
      @publication.update(publication_metrics)
      success_to_parse_publication
    rescue Exception => e
      puts "ERROR: save publication error, id: #{@article.id}"
      @error_description = e.message
      failure_to_parse_publication
    end
  end

  def parse_publication_attributes
    publication_metrics = {}
    @publication_attributes.each do |attribute|
      begin
        publication_metrics[attribute.to_sym] = self.send(attribute.to_sym)
      rescue Exception => e
        @publication.destroy
        error_message = "ERROR: get publication metric #{attribute} from article_id #{@article.id}\n"
        error_message += "#{e.message}"
        raise error_message
      end
    end
    publication_metrics
  end

  def parse_static_metrics
    static_metrics = {}
    @static_attributes.each do |attribute|
      begin
        static_metrics[attribute.to_sym] = self.send(attribute.to_sym)
      rescue Exception => e
        @static_metric.destroy
        error_message = "ERROR: get static metrics #{attribute} from article_id #{@article.id}\n"
        error_message += "#{e.message}"
        raise error_message
      end
    end
    static_metrics
  end

  def add_related_entities(publication_metrics)
    @related_entities.each do |entity, options|
      begin
        self.send("add_#{entity}".to_sym, publication_metrics["#{entity}_text".to_sym])
      rescue Exception => e
        puts "ERROR: can not create related entity #{entity} for article_id #{@article.id}"
        puts e.message
      end
    end
  end

  def parse_dynamic_metrics
    begin
      @revision = Revision.create(article_id: @article.id)
    rescue Exception => e
      raise "Fail create Revision article_id: #{@article.id}\n#{e.message}"
    end
    dynamic_metrics = {}
    @dynamic_attributes.each do |attribute|
      begin
        dynamic_metrics[attribute.to_sym] = self.send(attribute.to_sym)
      rescue Exception => e
        puts "ERROR: get dynamic metric #{attribute} from article_id #{@article.id}"
        puts e.message
      end
    end
    begin
      unless dynamic_metrics.empty?
        @dynamic_metric = DynamicMetric.create(dynamic_metrics.merge({revision_id: @revision.id}))
        @revision.update(dynamic_processed: true)
      end
    rescue Exception => e
      puts "ERROR: save dynamic_metric error, id: #{@article.id}"
      @dynamic_metric.destroy
      puts e.message
    end
  end

  def parse_external_metrics
    @external_attributes.each do |attribute|
      begin
        class_metric = attribute.to_s.to_class
      rescue NameError => e
        puts "No such module - '#{attribute}' !"
        next
      end
      obj = class_metric.new(@revision.id, @full_url)
      obj.parse_metrics
    end
  end

  def get_dom
    begin
      if @article.with_api
        JSON.parse(@body)
      else
        Nokogiri::HTML(@body)
      end
    rescue Exception => e
      raise "Crashed getting dom article_id : #{@article.id}\nMessage: #{e.message}"
    end
  end

  def get_full_url
    @article.url
  end

  alias_method :url, :get_full_url

  def create_methods_for_add_related_entity
    @related_entities.each do |entity_name, options|
      define_singleton_method("add_#{entity_name}".to_sym) do |param|
        next unless param
        if entity_name.pluralize != entity_name && entity_name.singularize == entity_name
          entity = find_or_create_entity(entity_name, param, options)
          @publication.send("#{entity_name}=".to_sym, entity)
        else
          param.split(/[;,] /).each do |name|
            entity = find_or_create_entity(entity_name, name, options)
            @publication.send("add_#{entity_name.singularize}".to_sym, entity) unless @publication.send(entity_name.to_sym).include?(entity)
          end
        end
      end
    end
  end

  def find_or_create_entity(entity_name, name, options)
    entity_name.singularize.to_class.find_or_create({name: name}.merge(options))
  end

  def is_text
    content.length > 100
  end

  def posted_weekday
    posted_at.wday
  end

  def time_delta
    (Time.now - posted_at.to_time).to_i
  end

  def response_code
    @body.status
  end

  def raise_scraping_error
    @http_response_status = @body.status
    @error_description = "ERROR!!! Cannot load page #{@article.url}, status_code: #{@http_response_status}"
    raise @error_description
  end

  def raise_parsing_error
    raise @error_description
  end
end
