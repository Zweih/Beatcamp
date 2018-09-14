import React from "react";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util"; 

import DefaultNav from "./nav/default_nav";
import LoginNav from "./nav/login_nav";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginNav}/>
      <Route path="/" component={DefaultNav}/>
    </Switch>
  </div>
);

export default App;
