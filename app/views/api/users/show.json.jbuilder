json.user do
  json.partial! "api/users/user", user: @user
end

json.albums do
  json.array! @user.albums do |album|
    json.id album.id
    json.title album.title
    json.user @user.username
    json.cover_url album.cover_url
    json.description album.description
		json.user_id album.user_id
		json.track_ids album.track_ids
  end
end

tracks = @user.tracks
tracks = tracks.each_with_object({}) do |track, hash| 
	hash[track.id] = {
		id: track.id,
		title: track.title,
		audio_url: track.audio_url,
		list_num: track.list_num,
		albumId: track.album_id,
		length: track.length
	}
end

json.tracks tracks