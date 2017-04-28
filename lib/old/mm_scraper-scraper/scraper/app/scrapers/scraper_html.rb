require_relative './scraper'

class HTMLScraper < Scraper
  def initialize(site_module, db)
    begin
      params = get_module_params(site_module)
      @pagination_urls = params['pagination_urls']
      @keywords = params['keywords']
      super(site_module, db, params)
    rescue
      raise "You havn't got any 'pagination_urls' or 'keywords' in your #{site_module}.yml"
    end
  end

  def add_links_to_queue(page)
    @mutex.synchronize do
      page.css(@keywords.join(", ")).each do |a|
        @queue << a['href']
      end
    end
  end

  def scrape_articles_urls
    pool = Thread.pool(POOL_TREAD_SIZE)
    @pagination_urls.each do |pagination_url|
      up = find_border_top(pagination_url)
      puts "Start scrape articles urls"
      (1..up).each do |i|
        link = pagination_url.gsub(KEY_PAGINATION, i.to_s)
        pool.process do
          begin
            # if ALLAY_PROXY
            page = Nokogiri::HTML(open(link))
            # else
            # end
            add_links_to_queue(page)
          rescue
          end
        end
      end
    end
    pool.shutdown
    @queue = @queue.uniq
    @queue -= @loaded_urls
  end

  def check_page_existense(link)
    begin
      download_page(link, false).status == 200
    rescue
      false
    end
  end

  def find_border_top(url)
    super {|link| check_page_existense(link)}
  end


end
