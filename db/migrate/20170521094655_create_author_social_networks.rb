class CreateAuthorSocialNetworks < ActiveRecord::Migration[5.0]
  def change
    create_table :author_social_networks do |t|
      t.string :url
      t.belongs_to :author, index: true
      t.belongs_to :social_network, index: true

      t.timestamps
    end
  end
end
