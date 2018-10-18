import { 
  RECEIVE_TRACK_ERRORS,
  REMOVE_TRACK_ERRORS,
  RECEIVE_TRACK,
  RECEIVE_ALL_TRACKS, } from "../actions/track_actions";

const TrackErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    case REMOVE_TRACK_ERRORS:
    case RECEIVE_TRACK:
    case RECEIVE_ALL_TRACKS:
      return [];
    default:
      return state;
  }
};

export default TrackErrorsReducer;