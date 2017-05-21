require './scraper/scraper_handler'
require 'sprockets'
require 'sass'
require 'pry'
require "./db/db_mysql"
require 'sinatra/base'
require "json"
require "http"

class App < Sinatra::Base
  # initialize new sprockets environment
  set :environment, Sprockets::Environment.new

  # # append assets paths
  # environment.append_path "assets/stylesheets"
  # environment.append_path "assets/javascripts"
  # environment.css_compressor = :scss
  #
  # # get assets
  # get "/resources/assets/*" do
  #   env["PATH_INFO"].sub!("/assets", "")
  #   settings.environment.call(env)
  # end
  #
  get '/' do
    content_type :json
    # z = {:articles => []}
    #
    # Resource.all.each do |r|
    #   articles = Article.where(:resource_id => r.id).order(:id).limit(100)
    #   articles.all.each {|x|
    #     article = article_serialize(x)
    #     z[:articles] = [article]
    #     # p y
    #     HTTP.post('http://localhost:3000/resources', :body => z.to_json)
    #     sleep(10)
    #   }
    # end
    HTTP.post('http://localhost:3000/resources', :body => z.to_json)



    response.to_json
  end


  def article_serialize article
    a_fields = [:resource_id, :url, :posted_at]
    p_fields = [:title]
    r_a_fields = {
      :static_processed => :processed
    }
    r_p_fields = {
      :content => :text
    }
    y = {:revisions => []}
    y = a_fields.reduce(y) {|h, f| h[f] = article[f]; h}
    y = r_a_fields.reduce(y) {|h, (k, v)| h[v] = article[k]; h}
    s = article.publication
    y = p_fields.reduce(y) {|h, f| h[f] = s[f]; h}
    y = r_p_fields.reduce(y) {|h, (k, v)| h[v] = s[k]; h}

    Revision.where(article_id: article.id).all.each do |rev|
      revision = revision_serialize(rev)
      y[:revisions] << revision
    end
    y
  end

  def revision_serialize revision
    a_fields = [:created_at]
    k = {:external_metrics => []}
    k = a_fields.reduce(k) {|h, f| h[f] = revision[f]; h}
    revision.external_metrics.each { |e|
      external_metric = external_metric_serialize(e)
      k[:external_metrics] << external_metric
    }
    k
  end

  def external_metric_serialize metric
    p_fields = [:likes, :shares, :reposts, :comments, :views]
    y = {:social_network_id => 1}
    y = p_fields.reduce(y) {|h, f| h[f] = metric[f]; h}
    y
  end
  #
  # get '/resources/:id' do
  #   @resource = Resource.where(:id => params[:id]).first
  #   @articles = Article.where(:articles__resource_id => params[:id]).join(:publications, :article_id=>:id).limit(10).all
  #   erb :"articles/index"
  # end
  #
  # get '/resources/:resource_id/:id' do
  #   # @resource = Resource.find(:id => params[:resource_id])
  #   @article = Article.where(
  #       :articles__id => params[:id]
      # ).join(
      #   :publications, :article_id=>:id
      # ).join(
  #       :categories, :id => :publications__category_id
  #     ).first
  #   e = ExternalMetric.select{[
  #       sum(:comments).as(:comments),
  #       sum(:likes).as(:likes),
  #       sum(:reposts).as(:reposts),
  #       :revision_id
  #     ]}.group(:revision_id)
  #   Revision.select{[
  #       DATE_FORMAT(:revisions__created_at, '%Y-%m-%d').as(:created_at),
  #       :comments,
  #       :likes,
  #       :reports
  #     ]}.where(:article_id => params[:id]).join(e, :revision_id => :id)
  #     .group{DATE_FORMAT(:revisions__created_at, '%Y-%m-%d')}
  #
  #
  #   # @authors = Publication.find(:article_id => 1).authors.map(&:name).join(", ")
  #   erb :"articles/show"
  # end
  #
  # get '/scraper/:site/:db/update' do
  #   scraper = ScraperHandler.choose_scraper(params[:site], params[:db])
  #   scraper.update_content
  # end
  #
  # get '/scraper/:site/:db' do
  #   scraper = ScraperHandler.choose_scraper(params[:site], params[:db])
  #   scraper.parse_new_content
  # end
  #
  # def build_resource_params(resource_name)
  #   resource = Resource.where(:module => resource_name).first
  #   resource_articles = Article.where(:resource_id => resource.id)
  #   scraped_articles = resource_articles.count
  #   parsed_articles = resource_articles.where(:state => 'parse_content_success').count
  #   {
  #     :resource => resource,
  #     :scraped_articles => scraped_articles,
  #     :parsed_articles => parsed_articles
  #   }
  # end
end


App.run!
