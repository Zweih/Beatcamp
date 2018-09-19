export const selectUserAlbums = (entities, user) => {
  return user.album_ids.map(albumId => entities.albums[albumId]);
};

export const selectUserAlbum = (entities, albumId) => {
  return entities.albums[albumId];
};

export const selectUser = (entities, userId) => {
  return entities.users[userId] || { album_ids: [] };
};