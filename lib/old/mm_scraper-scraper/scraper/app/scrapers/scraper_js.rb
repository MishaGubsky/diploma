require_relative './scraper'

class JSScraper < Scraper
  def initialize(site_module, db)
    begin
      params = get_module_params(site_module)
      @api_urls = params['api_urls']
      super(site_module, db, params)
    rescue
      raise "You havn't got any 'api_urls' in your #{site_module}.yml"
    end
  end

  def add_links_to_queue(page)
    @mutex.synchronize do
      page.each do |a|
        @queue << a['link']
      end
    end
  end

  def check_page_existense(link)
    begin
      download_page(link, false).status == 200
    rescue
      false
    end
  end

  def scrape_articles_urls
    pool = Thread.pool(POOL_TREAD_SIZE)
    @api_urls.each do |api_url|
      up = find_border_top(api_url)
      puts "Start scrape articles urls"
      (1..up).each do |i|
        link = api_url.gsub(KEY_PAGINATION, i.to_s)
        pool.process do
          json_page = JSON.parse(download_page(link))
          add_links_to_queue(json_page)
        end
      end
    end
    pool.shutdown
    @queue = @queue.uniq
    @queue -= @loaded_urls
  end

  def find_border_top(url)
    super {|link| check_page_existense(link)}
  end
end
