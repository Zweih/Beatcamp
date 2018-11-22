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

export const updateAlbum = (album, user) => {
	return $.ajax({
		method: "PATCH",
		url: `api/albums/${album.id}`,
		data: {
			album,
			user,
		},
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