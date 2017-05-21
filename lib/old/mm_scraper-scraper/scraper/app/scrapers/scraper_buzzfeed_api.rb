require_relative './scraper_js'
require 'json'

class ScraperBuzzfeedAPI < JSONScraper

  def initialize(db)
    super('buzzfeed', db)
  end

  def add_links_to_queue(page)
    buzzes = json_page['buzzes']
    @mutex.synchronize do
      buzzes.each do |a|
        @queue << "/#{a['username']}/#{a['uri']}"
      end
    end
  end

  def check_page_existense(link)
    begin
      response = HTTP.get(link)
      hash = JSON.parse(response)
    rescue
      puts "bad url: #{uri.to_s}"
    end
    buzzes = hash["buzzes"]
    return false if buzzes.empty?
    true
  end
end
