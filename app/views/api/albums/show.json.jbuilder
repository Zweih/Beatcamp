json.album do
	json.partial! "api/albums/album", album: @album
	json.cover_url @album.cover_url
	json.mini_cover_url @album.mini_cover_url
	json.user @album.user.username
end

json.tracks do
	json.array! @album.tracks do |track|
		json.partial! "api/tracks/track", track: track
	end
end