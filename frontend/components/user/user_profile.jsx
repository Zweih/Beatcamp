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

import { AuthRoute, ProtectedRoute } from "../../util/route_util"; 

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <h1>{this.props.pageUser.username}</h1>
      </div>
    );
  }
}

export default withRouter(UserProfile);