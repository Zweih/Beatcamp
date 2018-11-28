json.user do
	json.partial! "api/users/user", user: @user
end

json.albums do
	json.array! @user.albums do |album|
		json.partial! "api/albums/album", album: album
		json.user @user.username
		json.cover_url album.cover_url
		json.mini_cover_url album.mini_cover_url
	end
end

json.tracks do
	json.array! @user.tracks do |track|
		json.id track.id
		json.title track.title
		json.length track.length
	end
end
