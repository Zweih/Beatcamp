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
import UserHeader from "./user_header";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.pageUserId);
  }
  
  render() {
    return(
      <div className="user-profile">
        <UserHeader pageUser={this.props.pageUser} />
        <div className="user-main">
          <div className="user-mid-col">

          </div>
          <div className="user-sidebar">
            <h3>{this.props.pageUser.id}</h3>
            <h3>{this.props.pageUser.username}</h3>
            <h3>{this.props.pageUser.bio}</h3>
            <h3>{this.props.pageUser.location}</h3>
          </div>   
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);