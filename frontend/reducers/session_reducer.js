import { RECEIVE_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const defaultState = {
  currentUserId: null,
};

const session_reducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default session_reducer;