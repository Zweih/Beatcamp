json.partial! "api/albums/album", album: @album

json.tracks do
  json.array! @album.tracks do |track|
    json.id track.id
    json.title track.title
    json.audio_url track.audio_url
    json.list_num track.list_num
    json.album_id track.album_id
  end
end