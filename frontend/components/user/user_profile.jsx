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
import UserAlbumItemList from "./user_album_item_list";
import UserAlbumDetailContainer from "./user_album_detail_container";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.pageUserId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pageUserId !== nextProps.match.params.pageUserId) {
      this.props.fetchUser(nextProps.match.params.pageUserId);
    }
  }
  
  render() {      
    return (
      <div className="user-profile">
        <UserHeader pageUser={this.props.pageUser} />
        <div className="user-main">
          <div className="user-mid-col">
            <Switch>
              <Route
                exact path={`/users/${this.props.pageUserId}`}
                render={props => (
                  <UserAlbumItemList
                    {...props}
                    userAlbums={this.props.userAlbums}
                    pageUserId={this.props.pageUserId}
                  />
                )}
              />
              <Route
                path={`/users/:userId/albums/:albumId`}
                component={UserAlbumDetailContainer}
              />
            </Switch>
          </div>
          <section className="user-sidebar">
            { this.props.pageUser.avatar_url ? <img className="user-avatar" src={this.props.pageUser.avatar_url}
            /> : "" }
            <p className="user-title-location">
              <span className="user-title">{this.props.pageUser.username}</span>
              <span className="user-location">{this.props.pageUser.location}</span>
            </p>
            <p className="user-bio">
              {this.props.pageUser.bio}
            </p>
             { this.props.currentUser && this.props.currentUser.id === this.props.pageUserId ?
              <Link to={`/users/${this.props.currentUser.id}/edit`}>
                <button className="user-button">
                  Edit Profile
                </button>
              </Link>
            : ""}
            {
              this.props.pageUser.username ?
                <Link to={`/users/${this.props.nextUserId}`}>
                  <button className="user-button">
                    Next User
                  </button>
                </Link>
              : ""
            }
            <h3>discography</h3>
              <UserAlbumItemList
                userAlbums={this.props.userAlbums}
                pageUserId={this.props.pageUserId}
              />
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);