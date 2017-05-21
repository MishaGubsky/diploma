class CreateRevisions < ActiveRecord::Migration[5.0]
  def change
    create_table :revisions do |t|
     t.references :site_own_metric
     t.references :external_metrics

      t.timestamps
    end
  end
end
