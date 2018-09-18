class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.text :bio
      t.string :location
    end
  end
end
