class CreateHobbies < ActiveRecord::Migration[6.1]
  def change
    create_table :hobbies do |t|
      t.string :description
      t.string :description1
      t.string :description2
      t.string :description3
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
