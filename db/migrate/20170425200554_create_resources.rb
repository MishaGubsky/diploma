class CreateResources < ActiveRecord::Migration[5.0]
  def change
    create_table :resources do |t|
      t.string :domain
      t.string :module_name
      t.boolean :with_api

      t.timestamps
    end
  end
end
