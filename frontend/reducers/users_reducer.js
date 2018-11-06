import { 
	RECEIVE_CURRENT_USER,
	RECEIVE_ALL_USERS,
	RECEIVE_USER,
} from "../actions/session_actions";
import merge from "lodash.merge";

const usersReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_USER:
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { [action.user.id]: action.user });
		case RECEIVE_ALL_USERS:
			return Object.assign({}, state.users, action.users)
		default:
			return state;
	}
};

export default usersReducer;