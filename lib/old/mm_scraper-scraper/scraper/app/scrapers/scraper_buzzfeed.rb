require_relative './scraper_html'

class ScraperBuzzfeed < HTMLScraper
  def initialize(db)
    super('buzzfeed', db)
  end

  def check_url(address)
    url = address.gsub(@domain, '').gsub(' ', '')
    if (url =~ /^\/.+/) && !@loaded_urls.include?(url)
      @mutex.synchronize do
        @loaded_urls << url
      end
      if url =~ /^(\/[\w-]+){2}/
        save_page(url)
      end
    end
  end

  def add_links_to_queue(page)
    @mutex.synchronize do
      page.css(@keywords.join(", ")).each do |a|
        @queue << a['href']
      end
    end
  end

  def find_border_top(url)
    super do |link|
      begin
        download_page(link).status == 200
      rescue
        false
      end
    end
  end

end
