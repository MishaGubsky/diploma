require 'sequel'
require 'mysql2'
require 'pry'

class DB_new_mysql
  def initialize(module_name, domain)
    path = File.dirname(__FILE__) + "/../../config/database.yml"
    settings = YAML.load_file(path)
    @@connection ||= Sequel.connect(settings['mysql']['new_mysql'])
    @resource_id = find_resource_id(module_name, domain)
  end

  def resources
    @@connection[:resources]
  end

  def articles
    @@connection[:articles]
  end

  def revisions
    @@connection[:revisions]
  end

  def find_resource_id(module_name, domain)
    resource = resources.where(:module => module_name).first
    unless resource
      resource = new_resource(module_name, domain)
    end
    resource[:id]
  end

  def create(url, text, domain)
    begin
      article_id = new_article(url)
      new_revision(article_id, text, @resource_id)
      puts "i save #{url}"
    rescue Exception => e
      puts "DB ERROR!!: #{e.to_s}"
    end
  end

  def new_resource(module_name, domain)
    resources.insert(:domain => domain,
      :module => module_name)
  end

  def new_article(url)
    articles.insert(:url => url, :static_processed => false)
  end

  def new_revision(article_id, text, resource_id)
    revisions.insert(:article_id => article_id, :raw_content => text,
      :resource_id => resource_id)
  end

  def update(url, text, domain)
    puts "i update #{url}"
    article_id = update_article(url)
    new_revision(article_id, text, domain)
  end

  def update_article(url, domain)
    article = articles.where(:url => url).first
    article[:lastSeen] = Time.now
    article[:processed] = false
    article[:counter] += 1
    article.update(:lastSeen => Time.now,
                    :processed => false,
                    :counter => 1)
    article[:id]
  end
end
