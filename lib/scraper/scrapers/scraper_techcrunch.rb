class ScraperTechcrunch < Scraper
  def initialize
    super('techcrunch')
    @main_api = @configs[2]
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
