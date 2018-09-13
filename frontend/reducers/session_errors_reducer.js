import { RECEIVE_SESSION_ERRORS, RECEIVE_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, action.errors);
    case RECEIVE_USER:
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default sessionErrorsReducer;