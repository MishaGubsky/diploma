require './scraper/scraper_handler'
require 'sprockets'
require 'sass'
require 'pry'
require "./db/db_mysql"
require 'sinatra/base'

class App < Sinatra::Base
  # initialize new sprockets environment
  set :environment, Sprockets::Environment.new

  # append assets paths
  environment.append_path "assets/stylesheets"
  environment.append_path "assets/javascripts"
  environment.css_compressor = :scss

  # get assets
  get "/resources/assets/*" do
    env["PATH_INFO"].sub!("/assets", "")
    settings.environment.call(env)
  end

  get '/' do
    @resources = []
    WORKING_RESOURCES.each do |resource|
      @resources << build_resource_params(resource)
    end
    erb :"resources/index"
  end

  get '/resources/:id' do
    @resource = Resource.where(:id => params[:id]).first
    @articles = Article.where(:articles__resource_id => params[:id]).join(:publications, :article_id=>:id).limit(10).all
    erb :"articles/index"
  end

  get '/resources/:resource_id/:id' do
    # @resource = Resource.find(:id => params[:resource_id])
    @article = Article.where(
        :articles__id => params[:id]
      ).join(
        :publications, :article_id=>:id
      ).join(
        :categories, :id => :publications__category_id
      ).first
    e = ExternalMetric.select{[
        sum(:comments).as(:comments),
        sum(:likes).as(:likes),
        sum(:reposts).as(:reposts),
        :revision_id
      ]}.group(:revision_id)
    Revision.select{[
        DATE_FORMAT(:revisions__created_at, '%Y-%m-%d').as(:created_at),
        :comments,
        :likes,
        :reports
      ]}.where(:article_id => params[:id]).join(e, :revision_id => :id)
      .group{DATE_FORMAT(:revisions__created_at, '%Y-%m-%d')}


    # @authors = Publication.find(:article_id => 1).authors.map(&:name).join(", ")
    erb :"articles/show"
  end

  get '/scraper/:site/:db/update' do
    scraper = ScraperHandler.choose_scraper(params[:site], params[:db])
    scraper.update_content
  end

  get '/scraper/:site/:db' do
    scraper = ScraperHandler.choose_scraper(params[:site], params[:db])
    scraper.parse_new_content
  end

  def build_resource_params(resource_name)
    resource = Resource.where(:module => resource_name).first
    resource_articles = Article.where(:resource_id => resource.id)
    scraped_articles = resource_articles.count
    parsed_articles = resource_articles.where(:state => 'parse_content_success').count
    {
      :resource => resource,
      :scraped_articles => scraped_articles,
      :parsed_articles => parsed_articles
    }
  end
end


App.run!
