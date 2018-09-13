import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";

// TODO: ADD COMBINEREDUCERS AND OTHER REDUCERS

const RootReducer = combineReducers({
  entities,
  session,
  errors,
});

export default RootReducer;