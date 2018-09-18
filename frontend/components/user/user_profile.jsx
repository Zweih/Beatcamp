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
            { this.props.pageUser.avatar_url ? <img className="user-avatar" src={this.props.pageUser.avatar_url}
            /> : "" }
            <p className="user-title-location">
              <span className="user-title">{this.props.pageUser.username}</span>
              <span className="user-location">{this.props.pageUser.location}</span>
            </p>
            <p className="user-bio">{this.props.pageUser.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);