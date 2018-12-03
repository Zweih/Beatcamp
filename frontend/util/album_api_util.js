export const createAlbum = (album) => {
	return $.ajax({
		method: "POST",
		url: "/api/albums",
		data: {
			album,
		},
	});
};

export const fetchAlbums = () => {
	return $.ajax({
		method: "GET",
		url: "api/albums",
	});
};

export const updateAlbum = (albumForm) => {
	return $.ajax({
		method: "PATCH",
		url: `api/albums/${albumForm.get("album[id]")}`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: albumForm,
	});
};

export const fetchHomeAlbums = () => {
	return $.ajax({
		method: "GET",
		url: "api/albums",
		data: {
			home: true,
		}
	});
};

export const fetchAlbum = (albumId) => {
	return $.ajax({
		method: "GET",
		url: `api/albums/${albumId}`,
	});
};