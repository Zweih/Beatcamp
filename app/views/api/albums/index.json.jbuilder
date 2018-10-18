@albums.each do |album|
  json.set! album.id do
    json.partial! "album", album: album
    json.artist album.user.username
  end
end