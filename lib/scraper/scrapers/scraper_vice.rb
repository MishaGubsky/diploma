class ScraperVice < Scraper

  def initialize
    options = { :response => :json }
    super('vice', options)
    @main_api = @configs[2]
    @urls_with_pagination = @main_api
    @with_api = true
  end

  def download_page(url)
    begin
      response = @agent.load_page(url)
      @mutex.synchronize do
        response.each do |item|
          @queue << "/api/v1/articles/#{item['id']}"
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
        page.count > 0
      rescue
        false
      end
    end
  end
end
