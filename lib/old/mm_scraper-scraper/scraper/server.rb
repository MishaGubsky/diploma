require 'pry'
require 'sinatra'
require_relative './app/scraper_handler'

get '/:site/:db/update' do
  scraper = ScraperHandler.choose_scraper(params[:site], params[:db])
  scraper.update_content
end

get '/:site/:db' do
  scraper = ScraperHandler.choose_scraper(params[:site], params[:db])
  scraper.parse_new_content
end
