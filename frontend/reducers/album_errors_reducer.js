import { 
  RECEIVE_ALBUM_ERRORS,
  REMOVE_ALBUM_ERRORS,
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS, } from "../actions/album_actions";

const AlbumErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case REMOVE_ALBUM_ERRORS:
    case RECEIVE_ALBUM:
    case RECEIVE_ALBUMS:
      return [];
    default:
      return state;
  }
};

export default AlbumErrorsReducer;