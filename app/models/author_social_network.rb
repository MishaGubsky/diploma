class AuthorSocialNetwork < ApplicationRecord
  belongs_to :social_network
  belongs_to :author
end
