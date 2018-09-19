import * as AlbumApiUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REMOVE_ALBUM_ERRORS = "REMOVE_ALBUM_ERRORS";

// Normal Action Creators

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

const receiveAllAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

const receiveAlbumErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors,
  };
};

const removeAlbumErrors = () => {
  return {
    type: REMOVE_ALBUM_ERRORS,
  };
};

// Thunk Action Creators

export const createAlbum = (album) => {
  return (dispatch) => {
    return AlbumApiUtil.createAlbum(album).then( (album) => {
      return dispatch(receiveAlbum(album));
    }, (errors) => {
      return dispatch(receiveAlbumErrors(errors.responseJSON));
    });
  }
};

export const fetchAlbum = (albumId) => {
  return (dispatch) => {
    return AlbumApiUtil.fetchAlbum(albumId).then( (album) => {
      return dispatch(receiveAlbum(album));
    }), (errors) => {
      return dispatch(receiveAlbumErrors(errors.responseJSON));
    };
  }
}

export const fetchAlbums = () => {
  return (dispatch) => {
    return AlbumApiUtil.fetchAlbums().then( (albums) => {
      return dispatch(receiveAllAlbums(albums));
    }), (errors) => {
      return dispatch(receiveAlbumErrors(errors.responseJSON));
    }
  }
}

export const clearAlbumErrors = () => {
  return (dispatch) => {
    return dispatch(removeAlbumErrors());
  };
};