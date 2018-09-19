import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_ALL_USERS,
  RECEIVE_USER
 } from "../actions/session_actions";
import merge from "lodash/merge";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return merge({}, state, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, action.albums);
    default:
      return state;
  }
};

export default albumsReducer;