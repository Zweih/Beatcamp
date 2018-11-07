class AddLengthToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :length, :integer
  end
end
