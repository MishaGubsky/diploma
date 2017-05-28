class AddRepostsColumnToMetrics < ActiveRecord::Migration[5.0]
  def change
    add_column :metrics, :reposts, :integer, default: 0
  end
end
