require 'sequel'
require 'mysql2'

class DB_mysql
  def initialize
    path = File.dirname(__FILE__) + "/../../config/database.yml"
    settings = YAML.load_file(path)
    @@connection ||= Sequel.connect(settings['mysql']['default'])
  end


  def articles
    @@connection[:articles]
  end

  def revisions
    @@connection[:revisions]
  end

  def create(url, text, domain)
    begin
      article_id = new_article(url, domain)
      new_revision(article_id, text, domain)
      puts "I saved #{url}"
    rescue Exception => e
      puts "DB ERROR!!: #{e.to_s}"
    end
  end


  def update(url, text, domain)
    puts "i update #{url}"
    begin
      article_id = update_article(url, domain)
      new_revision(article_id, text, domain)
    rescue Exception => e
      puts "DB ERROR!!: #{e.to_s}"
    end
  end

  private

  def new_article(url, domain)
    articles.insert(:url => url, :lastUpdated => Time.now,
                    :resource => domain, :processed => false,
                    :creationTime => Time.now, :counter => 0)
  end

  def new_revision(article_id, text, domain)
    revisions.insert(:articleId => article_id, :loadedAt => Time.now,
                      :rawContent => text, :resource => domain,
                      :processed => false, :shareableWith => '')
  end

  def update_article(url, domain)
    article = articles.where(:url => url).first
    article[:lastUpdated] = Time.now
    article[:processed] = false
    article[:counter] += 1
    article.update(:lastUpdated => Time.now,
                    :processed => false,
                    :counter => 1)
    article._id
  end
end
