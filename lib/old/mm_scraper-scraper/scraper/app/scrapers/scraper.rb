require_relative './../../config/constants'
require_relative './../proxies'
require 'http'
require 'json'
require 'nokogiri'
require 'open-uri'
require 'yaml'
require 'parallel'
require 'thwait'
require 'thread'
require 'thread/pool'

class Scraper
  def initialize(site_module, db, params)
    begin
      @domain = params['domain']
    rescue
      raise "You havn't got any 'domain' in your #{site_module}.yml"
    end
    @module = site_module
    @db = db
    @loaded_urls = @db.articles.find().map{|x| x[:url]}
    @mutex = Mutex.new
    @proxy = Proxy.new
    @queue = []
  end

  def get_module_params(site_module)
    path = File.dirname(__FILE__) + "/../../initializers/#{site_module}.yaml"
    YAML.load_file(path)
  end

  def download_page(url, allay_proxy=ALLAY_PROXY, attempt=0)
    begin
      if allay_proxy && attempt <= 10
        proxy = @proxy.get_proxy
        page = HTTP.timeout(:connect => 5, :read => 5).via(proxy[:host],
          proxy[:port]).get(url)
      else
        page = HTTP.get(url)
      end
    rescue Exception => e
      if allay_proxy && attempt <= 11
        download_page(url, attempt + 1)
      else
        puts "crashed_url: #{url}"
        puts "error_message: #{e}"
      end
    end
  end

  def check_url(address)
    url = address.gsub(@domain, '').gsub(' ', '')
    if (url =~ /^\/.+/) && !@loaded_urls.include?(url)
      @mutex.synchronize do
        @loaded_urls << url
      end
      save_page(url)
    end
  end

  def scrape_articles_urls
    warn "\n!!!WARNING!!! scrape_articles_urls is not overrided! \n\n"
    @queue = []
  end

  def estimate_right_border(url, delta, &exist_checking)
    x = 1
    loop do
      link = url.gsub(KEY_PAGINATION, x.to_s)
      unless(exist_checking.call(link))
        break
      end
      x += delta
    end
    x
  end

  def get_exact_border(left, right, url, &exist_checking)
    mid = (left + right)/2
    if left >= right
      return mid
    end
    link = url.gsub(KEY_PAGINATION, mid.to_s)
    if(exist_checking.call(link))
      get_exact_border(mid + 1 , right, url, &exist_checking)
    else
      get_exact_border(left, mid - 1, url, &exist_checking)
    end
  end

  def find_border_top(url, &exist_checking)
    raise "No block given to verify the existence of the right border!" unless exist_checking
    puts "start searching of right_border"
    delta = 1000
    right = estimate_right_border(url, delta, &exist_checking)
    left = right == 1 ? right : right - delta
    border = get_exact_border(left, right, url, &exist_checking)
    puts "right_border: #{border}"
    border
  end

  def scrape_site
    puts "START"
    pool_size = POOL_TREAD_SIZE
    pool = Thread.pool(pool_size)
    @queue.each_with_index do |url, index|
      pool.process do
        if index > 500
          break
        end
        begin
          check_url(url)
        rescue Exception => e
          puts "ERROR!!! #{e.to_s}"
        end
      end
    end
    pool.shutdown
  end

  def save_page(url)
    page = download_page(@domain + url).to_s
    @db.create(url, page, @module)
  end

  def update_page(url)
    page = download_page(@domain + url).to_s
    @db.update(url, page, @module)
  end

  def parse_new_content
    puts "\n\nSite domain: #{@domain}"
    puts "Loaded pages: #{@loaded_urls.count}\n\n"
    start_time = Time.now
    p "start_time:#{start_time}"

    scrape_articles_urls

    puts "all links: #{@queue.count}"
    @queue -= @loaded_urls
    puts "new links: #{@queue.count}"

    scrape_site

    end_time = Time.now
    p "loaded_count: #{@loaded_urls.count}"
    p "end_time: #{end_time}"
    p "spended time: #{end_time - start_time}"
    "\ni'm ready"
  end

  def update_content
    puts "Start Updates"
    puts "Site domain: #{@domain}"
    puts "Loaded pages: #{@loaded_urls.count}"
    pool_size = POOL_TREAD_SIZE
    pool = Thread.pool(pool_size)
    @loaded_urls.each do |url|
      pool.process{ update_page(url) }
    end
    pool.shutdown
    puts "Updates complete!!"
  end
end
