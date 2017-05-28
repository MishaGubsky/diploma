class AddArticleToRevision < ActiveRecord::Migration[5.0]
  def change
    add_reference :revisions, :article, foreign_key: true
  end
end
