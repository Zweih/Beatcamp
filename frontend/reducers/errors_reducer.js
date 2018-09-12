import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  // TODO: add errors for user
});

export default errorsReducer;