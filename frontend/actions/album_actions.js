import * as AlbumApiUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REMOVE_ALBUM_ERRORS = "REMOVE_ALBUM_ERRORS";

// Normal Action Creators

const receiveAlbum = (payload) => {
	return {
		type: RECEIVE_ALBUM,
		album: payload.album,
		tracks: payload.tracks,
	}
};


const receiveAlbums = (albums) => {
	return {
		type: RECEIVE_ALBUMS,
		albums,
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

export const updateAlbum = (album, user) => {
	return (dispatch) => {
		return AlbumApiUtil.updateAlbum(album, user).then( (album) => {
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
			return dispatch(receiveAlbums(albums));
		}), (errors) => {
			return dispatch(receiveAlbumErrors(errors.responseJSON));
		}
	}
}

export const fetchHomeAlbums = () => {
	return (dispatch) => {
	return AlbumApiUtil.fetchHomeAlbums().then( (albums) => {
		return dispatch(receiveAlbums(albums));
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