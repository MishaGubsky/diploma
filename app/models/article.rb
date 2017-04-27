class Article < ApplicationRecord
  has_many: revisions
  has_one: static_metric
end
