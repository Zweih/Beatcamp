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
} ;

export const fetchAlbum = (albumId) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${albumId}`,
  });
};