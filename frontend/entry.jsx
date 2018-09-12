import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener( "DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
});