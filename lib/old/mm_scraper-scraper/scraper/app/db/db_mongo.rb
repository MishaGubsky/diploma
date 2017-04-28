require 'mongo'
include Mongo

class DB_mongo
  def initialize
    path = File.dirname(__FILE__) + "/../../config/database.yml"
    settings = YAML.load_file(path)
    hosts = settings['mongo']['default'].delete('hosts')
    @@connection ||= Mongo::Client.new(hosts, settings['mongo']['default'])
  end

  def articles
    @@connection[:articles]
  end

  def revisions
    @@connection[:revisions]
  end

  def create(url, text, domain)
    begin
      new_article(url, domain)
      new_revision(text, domain)
      puts "i save #{url}"
    rescue Exception => e
      puts "DB ERROR!!: #{e.to_s}"
    end
  end

  def update(url, text, domain)
    puts "i update #{url}"
    begin
      article = articles.find({:url => url}).first
      article[:lastSeen] = Time.now
      article[:processed] = false
      article[:counter] += 1
      Thread.current['id'] = article[:_id]
      articles.update_one({:_id => article[:_id]}, article)
      new_revision(text, domain)
    rescue Exception => e
      puts "DB ERROR!!: #{e.to_s}"
    end
  end

  def new_article(url, domain)
    id = BSON::ObjectId.new
    Thread.current['id'] = id
    articles.insert_one({
      _id: id,
      url: url,
      lastSeen: Time.now,
      resource: domain,
      processed: false,
      creationTime: Time.now,
      counter: 0
    })
  end

  def new_revision(text, domain)
    revisions.insert_one({
      articleId:Thread.current['id'],
      loadedAt: Time.now,
      rawContent: text,
      resource: domain,
      processed: false
    })
  end

end
