@albums.each do |album|
	json.set! album.id do
		json.partial! "album", album: album
		json.med_cover_url album.med_cover_url
		json.user album.user.username
	end
end