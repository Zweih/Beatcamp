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
    <div id="header-wrapper">
    <header className="main-header">
      <div className="left-header">
        <Link to="/" className="logo">
          <img src="https://my.mixtape.moe/eohwhz.png"/>
        </Link>
      </div>
    </header>
   </div>

   <LoginFormContainer />
  </div>
);

export default LoginNav;