@albums.each do |album|
	json.set! album.id do
		json.id album.id
		json.title album.title
		json.description album.description
		json.user_id album.user_id
		json.track_ids json.track_ids
		json.med_cover_url album.med_cover_url
		json.user album.user.username
	end
end