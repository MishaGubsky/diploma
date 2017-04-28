require_relative './scraper'
require 'yaml'

class ScraperNytimes < Scraper
  def initialize(db)
    # @site = 'http://www.nytimes.com/'
    # @db = DB_mongo.new
    # # @domain, @keywords, @main_urls = get_module_params(site)
    # # # @excepted_keywords = Regexp.union(excepted_keywords)
    # @loaded_urls = @db.articles.find().map{|x| x[:url]}
    # @clear_urls = @loaded_urls.clone
    # @mutex = Mutex.new
    super('nytimes', db)
    # @queue = []
  end

  def get_module_params
    YAML.load_file("./modules/nytimes.yaml").values
  end

  def check_url(element)
    url = element['href'].gsub(/( |http:\/\/www\.nytimes\.com)/,'') if element['href']

    # p "#{url}"
    if (url =~ /^\/.+/) && !@loaded_urls.include?(url)

      @mutex.synchronize do
        @loaded_urls << url
      end
      if url =~ /^\/\d+\/\d+\/\d+\/[\w-]+\/[\w-]+.*/ #|| element.attr('class') && !(element.attr('class').split(' ') & @keywords).empty?
        p "#{url}"

        self.save_page(url)   # YOHOO, New url
        @clear_urls << url
      end
    end
  end
end
