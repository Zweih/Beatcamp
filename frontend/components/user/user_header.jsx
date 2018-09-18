import React from "react";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
  withRouter,
  HashRouter
} from "react-router-dom";

const UserHeader = (props) => {
  return (
    <div className="user-header">
      <header className="image-header">
      </header>
    </div>
  );
};

export default withRouter(UserHeader);