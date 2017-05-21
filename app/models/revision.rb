class Revision < ApplicationRecord
  has_one :site_own_metric, class_name: "Metric"
  has_many :external_metrics, class_name: "Metric"
end
