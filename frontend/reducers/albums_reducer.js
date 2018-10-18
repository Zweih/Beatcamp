import {
	RECEIVE_CURRENT_USER,
	RECEIVE_USER
} from "../actions/session_actions";

import {
	 RECEIVE_ALBUM,
	 RECEIVE_ALBUMS
} from "../actions/album_actions";

import merge from "lodash/merge";

const albumsReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_CURRENT_USER:
		case RECEIVE_USER:
			const albums = {};

			Object.values(action.albums).forEach( (album) => {
				return albums[album.id] = album;
			});

			return merge({}, state.albums, albums);
		case RECEIVE_ALBUM:
			return merge({}, state, { [action.album.id]: action.album });
		case RECEIVE_ALBUMS:
			return merge({}, state, action.albums);
		default:
			return state;
	}
};

export default albumsReducer;