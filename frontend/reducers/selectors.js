export const selectUserAlbums = (entities, user) => {
	return user.album_ids.map(albumId => entities.albums[albumId]);
};

export const selectAlbumTracks = (entities, trackIds) => {
	return trackIds.map(trackId => entities.tracks[trackId]);
};

export const selectUserAlbum = (entities, albumId) => {
	return entities.albums[albumId] || { track_ids: [] };
};

export const selectUser = (entities, userId) => {
	return entities.users[userId] || { album_ids: [] };
};