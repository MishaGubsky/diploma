class CreateJoinTableArticleKeyword < ActiveRecord::Migration[5.0]
  def change
    create_join_table :Articles, :Keywords do |t|
      # t.index [:article_id, :keyword_id]
      # t.index [:keyword_id, :article_id]
    end
  end
end
