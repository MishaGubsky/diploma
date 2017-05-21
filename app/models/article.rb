class Article < ApplicationRecord
  has_many :revisions
  has_and_belongs_to_many :tags
  has_and_belongs_to_many :authors
  has_and_belongs_to_many :keywords
  has_and_belongs_to_many :categories
end
