class ChangeUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :resources_limit, :integer, default: 1
    add_column :users, :can_download, :boolean, default: true
  end

  create_table :users_resources, id: false do |t|
    t.belongs_to :user, index: true
    t.belongs_to :resource, index: true
  end
end
