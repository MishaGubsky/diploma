class ScraperBuzzfeed < Scraper
  def initialize
    super('buzzfeed')
    @main_api = @configs[2].first(1)
    @urls_with_pagination = @main_api
  end

  def find_border_top(url)
    super do |link|
      begin
        page = @agent.load_page link
        page && page.status == 200
      rescue
        false
      end
    end
  end
end
