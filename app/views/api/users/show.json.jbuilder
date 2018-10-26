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
		json.userId album.user_id
		json.track_ids album.track_ids
		
		json.tracks do
			json.array! album.tracks do |track|
				json.id track.id
				json.title track.title
				json.audio_url track.audio_url
				json.list_num track.list_num
				json.albumId track.album_id
			end
		end
  end
end