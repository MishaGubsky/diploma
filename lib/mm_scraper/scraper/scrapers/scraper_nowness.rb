require_relative 'scraper'

class ScraperNowness < Scraper

  def initialize
    options = { :response => :json }
    super('nowness', options)
    @main_api = @configs[2]
    @urls_with_pagination = @main_api
    @agent.headers = { 'X-Nowness-Language' => 'en-us' }
    @with_api = true
  end

  def download_page(url)
    begin
      response = @agent.load_page(url)
      videos = response['video']['items']
      videos.map! { |video| video['translations'][0]['slug'] }.compact.uniq
      @mutex.synchronize do
        videos.each do |slug|
          @queue << "/api/post/getBySlug/#{slug}"
        end
      end
    rescue
      puts "bad_url: #{url}"
    end
  end

  def find_border_top(pagination_url)
    begin
      puts "start searching of right_border"
      response = @agent.load_page(pagination_url.gsub(KEY_PAGINATION, 1.to_s))
      border = response['video']['meta']['totalPages']
      puts "right_border: #{border}"
      border
    rescue Exception => e
      puts "Fail search right border\n#{e.message}"
    end
  end

end
