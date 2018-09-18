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

import DefaultNavContainer from "./nav/default_nav_container";
import LoginNav from "./nav/login_nav";
import UserProfileContainer from "./user/user_profile_container";

const App = () => (
  <div>
    <HashRouter>
      <div>
        <Switch>
          <AuthRoute exact path="/login" component={LoginNav} />
          <Route path="/" component={DefaultNavContainer} />
        </Switch>
        <Route path="/users/:userId" component={UserProfileContainer} />
      </div>
    </HashRouter>
  </div>
);

export default App;
