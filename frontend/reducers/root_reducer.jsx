import { combineReducers } from "redux";

// TODO: ADD COMBINEREDUCERS AND OTHER REDUCERS

const RootReducer = function counter(state = 0, action) {
  switch (action.type) {
  case "INCREMENT": return state + 1;
  case "DECREMENT": return state - 1;
  default: return state;
  }
}

export default RootReducer;