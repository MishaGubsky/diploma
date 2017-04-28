require_relative './scrapers/scraper_buzzfeed'
require_relative './scrapers/scraper_buzzfeed_api'
require_relative './scrapers/scraper_nytimes'
require_relative './db/db_mongo'
require_relative './db/db_mysql'
require_relative './db/db_new_mysql'

class ScraperHandler
  def self.choose_scraper(name_scraper, db_name)
    db = self.choose_db(db_name, name_scraper)
    begin
      Object.const_get("Scraper#{name_scraper.capitalize}").new(db)
    rescue NameError => e
      raise "This site - '#{name_scraper}' - doesn't supported! "
    end
  end

  def self.choose_db(db_name, name_scraper)
    if db_name == 'new_mysql'
      path = File.dirname(__FILE__) + "/../initializers/#{name_scraper}.yaml"
      params = YAML.load_file(path)
      return DB_new_mysql.new(name_scraper, params['domain'])
    end

    begin
      Object.const_get("DB_#{db_name}").new
    rescue NameError => e
      raise "We don't support '#{db_name}' database! "
    end
  end
end
