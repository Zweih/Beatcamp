import {
	RECEIVE_ALBUM
 } from "../actions/album_actions";

import {
	RECEIVE_USER
} from "../actions/session_actions";

import {
	RECEIVE_TRACK,
	RECEIVE_ALL_TRACKS
	} from "../actions/track_actions";

import merge from "lodash.merge";

const tracksReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_TRACK:
		return merge({}, state, { [action.track.id]: action.track });
		case RECEIVE_USER:
		case RECEIVE_ALBUM:
		case RECEIVE_ALL_TRACKS:
			return merge({}, state, action.tracks);
		default:
			return state;
	}
};

export default tracksReducer;