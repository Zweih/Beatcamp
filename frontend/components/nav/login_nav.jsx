import React from "react";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util"; 

import GreetingContainer from "../greeting/greeting_container";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

const LoginNav = () => (
  <div>
    <div id="login-header-wrapper">
      <header className="login-main-header">
        <div className="login-left-header">
          <Link to="/" className="logo">
            <img src="https://s3.amazonaws.com/beatcamp-pro/bc-logotype-color-64.png"/>
          </Link>
        </div>
        <header className="login-right-header">
        </header>
      </header>
    </div>
  </div>
);

export default LoginNav;