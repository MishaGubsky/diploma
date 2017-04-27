class CreateStaticMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :static_metrics do |t|
      t.string :url
      t.datetime :posted_at
      t.text :title
      t.text :content
      t.integer :image_count
      t.integer :video_count

      t.timestamps
    end
  end
end
