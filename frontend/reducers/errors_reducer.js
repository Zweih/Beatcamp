import session from "./session_errors_reducer";
import album from "./album_errors_reducer";
import track from "./track_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session,
	album,
	track,
});

export default errorsReducer;