class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.datetime :last_parsing_date
      t.boolean :static_processed, :default => false

      t.timestamps
    end
  end
end
