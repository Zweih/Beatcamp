import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./components/root";
import configureStore from "./store/store";
import * as SessionAPIUtil from "./util/session_api_util.js"

document.addEventListener( "DOMContentLoaded", () => {
  let preloadedState = null;

  if(window.currentUser) {
    preloadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser,
        },
      },
    };
    delete window.currentUser;
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);
  const root = document.getElementById("root");

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUsers = SessionAPIUtil.fetchUsers;
  window.fetchUser = SessionAPIUtil.fetchUser;
  window.signup = SessionAPIUtil.signup;
  window.updateUser = SessionAPIUtil.updateUser;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
});