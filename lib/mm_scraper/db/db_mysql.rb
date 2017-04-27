require 'yaml'
require 'sequel'
require 'mysql2'

path = File.dirname(__FILE__) + "/../config/database.yml"
settings = YAML.load_file(path)
Sequel.connect(settings['mysql']['default'])

class Resource < Sequel::Model
  one_to_many :articles
  one_to_one :config
  one_to_many :authors

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class Article < Sequel::Model
  many_to_one :resource
  one_to_many :revisions
  one_to_one :publication

  plugin :timestamps, :force=>true, :update_on_create=>true
  plugin :touch
end

class Revision < Sequel::Model
  one_to_one :dynamic_metric
  many_to_one :article
  one_to_many :external_metrics

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class Publication < Sequel::Model
  one_to_one :article
  many_to_one :category
  many_to_many :authors
  many_to_many :keywords
  one_to_one :static_metric

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class DynamicMetric < Sequel::Model
  one_to_one :revision

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class SocialNetwork < Sequel::Model
  one_to_many :external_metrics

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class ExternalMetric < Sequel::Model
  many_to_one :social_network
  many_to_one :revision

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class Config < Sequel::Model
  one_to_one :resource

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class Author < Sequel::Model
  many_to_one :resource

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class Keyword < Sequel::Model
  plugin :timestamps, :force=>true, :update_on_create=>true
end

class Category < Sequel::Model
  one_to_many :publications

  plugin :timestamps, :force=>true, :update_on_create=>true
end

class StaticMetric < Sequel::Model
  one_to_one :publication

  plugin :timestamps, :force=>true, :update_on_create=>true
end
