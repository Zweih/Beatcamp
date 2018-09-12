import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./components/root";
import configureStore from "./store/store";
import * as SessionAPIUtil from "./util/session_api_util.js"

document.addEventListener( "DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUsers = SessionAPIUtil.fetchUsers;
  window.fetchUser = SessionAPIUtil.fetchUser;
  window.signup = SessionAPIUtil.signup;
  window.updateUser = SessionAPIUtil.updateUser;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
});