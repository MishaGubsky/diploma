class ScraperHandler
  def self.choose_scraper(name_scraper, db_name)
    self.choose_db(db_name)
    begin
      "scraper_#{name_scraper}".to_class.new
    rescue NameError => e
      raise "This site - '#{name_scraper}' - doesn't supported! "
    end
  end

  def self.choose_db(db_name)
    begin
      require_relative "./../db/db_#{db_name}"
    rescue
      raise "We don't support '#{db_name}' database! "
    end
  end
end
