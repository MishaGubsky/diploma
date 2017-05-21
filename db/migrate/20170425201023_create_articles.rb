class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.datetime :last_parsing_at
      t.boolean :processed, :default => false
      t.string :url
      t.text :title
      t.text :text
      t.datetime :posted_at

      t.timestamps
    end
  end
end
