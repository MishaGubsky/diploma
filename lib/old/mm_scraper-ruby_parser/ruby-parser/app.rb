require_relative './../config/constants'

Dir.glob(Dir.pwd + '/ruby-parser/modules/*', &method(:require))

class Application

  def initialize(db_name)
    require_relative("./../db/db_#{db_name}")
  rescue
    raise "We don't support '#{db_name}' database! "
  end

  def parse_content(first_parsing: false, resource: nil, columns: nil)
    puts "\n\nStart parsing"
    start_time = Time.now
    puts "Start time of parsing:#{start_time}"
    data = resource ? get_data_for_update_publications(resource) :
      get_old_or_not_updated_article
    mutex = Mutex.new
    parsed = []
    pool = Thread.pool(32)
    data.each_with_index do |article, i|
      pool.process do
        begin
          next if parsed.include?(article.id)
          mutex.synchronize do
            parsed << article.id
          end
          parser_class = get_module(article.resource.module)
          parser = parser_class.new(article, publication_attributes: columns)
          parser.check_status_page unless article.static_processed
          if resource
            parser.parse_publication
          else
            parser.parse_publication unless article.static_processed
            parser.parse_dynamic_metrics
            parser.parse_external_metrics unless first_parsing
          end
        rescue Exception => e
          puts "UPDATE ERROR, article_id: #{article.id}"
          puts e.message
        end
        posted_at = parser.publication ? parser.publication.posted_at : nil
        article.update(static_processed: parser.static_processed,
                       state: parser.state,
                       error_description: parser.error_description,
                       http_response_status: parser.response_code,
                       posted_at: posted_at
        )
        puts "#{i + 1} articles are already parsed" if i % 500 == 499
      end
    end
    pool.shutdown
    end_time = Time.now
    puts "End time of parsing: #{end_time}"
    puts "Spended time: #{end_time - start_time}"
    puts "\n\n"
  end

  def get_data_for_update_publications(resource)
    Article.where(resource_id: Resource.find(:module => resource).id).
      where(state: 'parse_content_success')
  rescue Exception => e
    raise "FAIL TO UPDATE COLUMNS!!!!! \n #{e.message}"
  end

  def get_old_or_not_updated_article
    articles = []
    articles += Article.where(state: 'scrape_pending').to_a
    puts "#{articles.count} Articles are still not static parsed"
    articles += Article.where(state: 'parse_content_success').
      where(posted_at: (Date.today - PARSE_LIMIT_DAYS)..(Date.today + 1)).reverse_order(:posted_at).
      to_a
    puts "Total #{articles.count} Articles for parsing"
    articles
  rescue Exception => e
    raise "FAIL GET ARTICLES!!!!! \n #{e.message}"
  end

  def get_module(resource)
    "parser_#{resource}".to_class
  rescue NameError => e
    raise "No such module - '#{resource}' !"
  end

end
