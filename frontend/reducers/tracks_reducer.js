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
	const tracks = {}

	switch (action.type) {
		case RECEIVE_USER: 
			Object.values(action.albums).forEach( (album) => { 
				Object.values(album.tracks).forEach( (track) => {
					return tracks[track.id] = track;
				});
			});

			return merge({}, state, tracks);
		case RECEIVE_ALBUM:
			Object.values(action.tracks).forEach( (track) => { 
				return tracks[track.id] = track;
			});

			return merge({}, state, tracks);
		case RECEIVE_TRACK:
			return merge({}, state, { [action.track.id]: action.track });
		case RECEIVE_ALL_TRACKS:
			return merge({}, state, action.tracks);
		default:
			return state;
	}
};

export default tracksReducer;