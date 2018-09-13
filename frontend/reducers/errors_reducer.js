import session from "./session_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session,
  // TODO: add errors for user
});

export default errorsReducer;