class Revision < ApplicationRecord
  has_one :site_own_metrics, class_name: "Metric", foreign_key: "site_own_metric_id"
  has_many :external_metrics, class_name: "Metric", foreign_key: "external_metric_id"
end
