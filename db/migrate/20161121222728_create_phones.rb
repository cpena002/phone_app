class CreatePhones < ActiveRecord::Migration
  def change
    create_table :phones do |t|
      t.string :name
      t.integer :home_number
      t.integer :cell_number

      t.timestamps null: false
    end
  end
end
