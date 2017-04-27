class Scraper
  def initialize(site, options = {})
    @site = site
    @configs = get_params(site)
    @domain, @keywords = @configs.first(2)
    @agent = PageLoader.new(@domain, response: options[:response])
    @with_api = false
    @pattern_url = Regexp.new(@configs[3])
    uri = URI.parse(@domain)
    @pretty_url = PublicSuffix.parse(uri.host).domain
    @resource = Resource.find(domain: @domain, module: @site)
    unless @resource
      @resource = Resource.create(domain: @domain, module: @site, url: @pretty_url)
      set_configs({ resource_id: @resource.id })
    end
    @loaded_urls = Article.where(resource: @resource).map{ |x| x.url }
    @mutex = Mutex.new
    @queue = []
  end

  def get_params(site)
    YAML.load_file(File.dirname(__FILE__) + "/../initializers/#{site}.yaml").values
  end

  def set_configs(params)
    attributes = @configs[4]
    attributes.each { |attr| params[attr.to_sym] = true}
    Config.create(params)
  end

  def download_page(url)
    begin
      url.gsub!(@domain, '')
      page = @agent.load_page(url)
      dom = Nokogiri::HTML(page)
      @mutex.synchronize do
        dom.css(@keywords.join(", ")).each do |a|
          @queue << a['href']
        end
      end
    rescue
      puts "bad_url: #{url}"
    end
  end

  def check_url(address)
    url = address.gsub(@domain, '')
    if (url =~ /^\/.+/) && !@loaded_urls.include?(@domain + url)
      @mutex.synchronize do
        @loaded_urls << (@domain + url)
      end
      if url =~ @pattern_url
        save_in_db(@domain + url)
      end
    end
  end

  def scrape_articles_urls(first_scraping, page_limit)
    pool = Thread.pool(THREAD_POOL_SIZE)
    @urls_with_pagination.each do |pagination_url|
      up = first_scraping ? find_border_top(pagination_url) : page_limit
      puts "Start scrape articles urls"
      (1..up).each do |i|
        link = pagination_url.gsub(KEY_PAGINATION, i.to_s)
        pool.process { download_page link }
      end
    end
    pool.shutdown
    @queue = @queue.uniq
    @queue -= @loaded_urls
  end

  def estimate_right_border(url, &exist_checking)
    x = 2
    loop do
      link = url.gsub(KEY_PAGINATION, x.to_s)
      break unless exist_checking.call link
      x *= 2
    end
    x
  end

  def get_exact_border(left, right, url, &exist_checking)
    while left != right
      mid = (left + right + 1) / 2
      link = url.gsub(KEY_PAGINATION, mid.to_s)
      if exist_checking.call link
        left = mid
      else
        right = mid - 1
      end
    end
    left
  end

  def find_border_top(url, &exist_checking)
    raise "No block given to verify the existence of the right border!" unless exist_checking
    puts "start searching of right_border"
    left = 1
    right = estimate_right_border(url, &exist_checking)
    border = get_exact_border(left, right, url, &exist_checking)
    puts "right_border: #{border}"
    border
  end

  def scrape_site
    puts "START"
    pool_size = THREAD_POOL_SIZE
    pool = Thread.pool(pool_size)
    @queue.each_with_index do |url, index|
      pool.process do
        begin
          check_url(url)
        rescue Exception => e
          puts "ERROR!!! #{e.to_s}"
        end
      end
    end
    pool.shutdown
  end

  def save_in_db(url)
    begin
      Article.create(
        url: url,
        resource_id: @resource.id,
        with_api: @with_api)
      @clear_urls += 1
    rescue Exception => e
      puts "DB ERROR!!: #{e.to_s}"
    end
  end

  def parse_new_content(first_scraping: false, page_limit: 30)
    puts "\nSite domain: #{@domain}"
    puts "Loaded pages: #{@loaded_urls.count}\n\n"
    @clear_urls = 0
    start_time = Time.now
    p "start_time:#{start_time}"

    scrape_articles_urls(first_scraping, page_limit)

    puts "all links: #{@queue.count}"
    @queue -= @loaded_urls
    puts "new links: #{@queue.count}"

    scrape_site

    end_time = Time.now
    p "clear_count: #{@clear_urls}"
    p "loaded_count: #{@loaded_urls.count}"
    p "end_time: #{end_time}"
    p "spended time: #{end_time - start_time}"
    "\ni'm ready"
  end
end
