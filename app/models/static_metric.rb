class StaticMetric < ApplicationRecord
  has_many: authors
  has_many: keywords
  has_many: tags
  has_many: categories
end
