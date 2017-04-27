require_relative 'scraper'

class ScraperBuzzfeedApi < Scraper

  def initialize
    options = { :response => :json }
    super('buzzfeed', options)
    @main_api = @configs[2].last(1)
    @urls_with_pagination = @main_api
  end

  def download_page(url)
    begin
      response = @agent.load_page(url)
      buzzes = response['buzzes']
      @mutex.synchronize do
        buzzes.each do |item|
          @queue << "/#{item['username']}/#{item['uri']}"
        end
      end
    rescue
      puts "bad_url: #{url}"
    end
  end

  def find_border_top(url)
    super do |link|
      begin
        page = @agent.load_page link
        page['buzzes'].count > 0
      rescue
        false
      end
    end
  end

end
