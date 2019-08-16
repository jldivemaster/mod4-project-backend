class CreateResources < ActiveRecord::Migration[5.2]
  def change
    create_table :resources do |t|
      t.string :title
      t.text :notes
      t.string :link
      t.integer :author_id
      t.integer :mod_number

      t.timestamps
    end
  end
end
