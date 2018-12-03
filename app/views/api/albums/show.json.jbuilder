json.album do
	json.id @album.id
	json.title @album.title
	json.description @album.description
	json.user_id @album.user_id
	json.track_ids @album.track_ids
	json.user @album.user.username
	json.cover_url @album.cover_url
	json.mini_cover_url @album.mini_cover_url
end

json.tracks do
	@album.tracks.each do |track|
		json.set! track.id do
			json.id track.id
			json.title track.title
			json.list_num track.list_num
			json.album_id track.album_id
			json.audio_url track.audio_url
			json.length track.length
		end
	end
end