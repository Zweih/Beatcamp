class ChangeAlbums < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :artist_id, :user_id
  end
end
