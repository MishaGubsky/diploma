class Author < ApplicationRecord
  has_many :author_social_networks
  has_many :social_networks, through: :author_social_networks
end
