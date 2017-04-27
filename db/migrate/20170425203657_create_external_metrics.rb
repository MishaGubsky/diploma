class CreateExternalMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :external_metrics do |t|
      t.integer :likes, :default => 0
      t.integer :shares, :default => 0
      t.integer :comments, :default => 0
      t.integer :views, :default => 0
      t.integer :impressions, :default => 0

      t.timestamps
    end
  end
end
