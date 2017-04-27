class ScraperPapermag < Scraper

  def initialize
    options = { :response => :json }
    super('papermag', options)
    @main_api = @configs[2]
    @urls_with_pagination = @main_api
    @with_api = true
  end

  def download_page(url)
    begin
      response = @agent.load_page(url)
      @mutex.synchronize do
        response['posts_by_source']['frontpage'].each do |item|
          @queue << "/res/bootstrap/data.js?post_id=#{item['_id']}&site_id=11059957&resource_id=fp&mode=full"
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
        page['posts_by_source']['frontpage'].count > 0
      rescue
        false
      end
    end
  end
end
