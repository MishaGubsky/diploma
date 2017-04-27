class CreateDynamicMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :dynamic_metrics do |t|
      t.integer :views, :default => 0
      t.integer :comments, :default => 0
      t.integer :likes, :default => 0
      t.integer :shares, :default => 0
      t.integer :impressions, :default => 0

      t.timestamps
    end
  end
end
