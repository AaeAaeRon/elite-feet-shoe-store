class CreateSelections < ActiveRecord::Migration[6.0]
  def change
    create_table :selections do |t|
      t.integer :shoeId
      t.integer :orderId

      t.timestamps
    end
  end
end
