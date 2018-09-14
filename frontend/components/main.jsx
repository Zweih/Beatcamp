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

import { AuthRoute, ProtectedRoute } from "../util/route_util"; 

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import DefaultNav from "./nav/default_nav";
import LoginNav from "./nav/login_nav";

const Main = () => (
  <div>

  </div>
);

export default withRouter(Main);
