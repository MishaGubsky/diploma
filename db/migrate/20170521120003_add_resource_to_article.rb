class AddResourceToArticle < ActiveRecord::Migration[5.0]
  def change
    add_reference :articles, :resource, foreign_key: true
  end
end
