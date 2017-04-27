class CreateRevisions < ActiveRecord::Migration[5.0]
  def change
    create_table :revisions do |t|
      t.boolean :dynamic_processed, :default => false

      t.timestamps
    end
  end
end
