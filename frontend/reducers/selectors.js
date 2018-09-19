export const selectUserAlbums = (state, user) => {
  return user ? user.album_ids.map(albumId => state.entities.albums[albumId]) : [];
};

export const selectUserAlbum = (state, albumId) => {
  return state.entities.albums[albumId];
};