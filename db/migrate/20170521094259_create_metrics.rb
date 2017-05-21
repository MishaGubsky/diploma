class CreateMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :metrics do |t|
      t.integer :views, :default => 0
      t.integer :likes, :default => 0
      t.integer :shares, :default => 0
      t.integer :comments, :default => 0
      t.integer :impressions, :default => 0
      t.belongs_to :revision, index: true
      t.belongs_to :social_network, index: true

      t.timestamps
    end
  end
end
