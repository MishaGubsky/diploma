class Metric < ApplicationRecord
  belongs_to :social_network, optional: true
end
