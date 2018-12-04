json.user do
	json.id @user.id
	json.username @user.username
	json.location @user.location
	json.bio @user.bio
	json.avatar_url @user.avatar_url
	json.mini_avatar_url @user.mini_avatar_url
	json.album_ids @user.album_ids
end

json.albums do
	@user.albums.each do |album|
		json.set! album.id do
			json.partial! "api/albums/album", album: album
			json.id album.id
			json.title album.title
			json.description album.description
			json.user_id album.user_id
			json.track_ids album.track_ids
			json.user @user.username
			json.cover_url album.cover_url
			json.mini_cover_url album.mini_cover_url
		end
	end
end

json.tracks do
	@user.tracks.each do |track|
		json.set! track.id do
			json.id track.id
			json.title track.title
			json.length track.length
		end
	end
end