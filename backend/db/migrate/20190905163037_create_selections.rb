class CreateSelections < ActiveRecord::Migration[6.0]
  def change
    create_table :selections do |t|
      t.integer :shoe_id
      t.integer :order_id

      t.timestamps
    end
  end
end
