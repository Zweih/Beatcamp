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
    const albumItems = this.props.userAlbums.map( (album, idx) => {
      return (
        {
          className: idx % 2 === 0 ? "leftmost-album" : "",
          key: idx,
          album: album,
          albums: this.props.userAlbums,
          pageUserId: this.props.pageUserId,
        }
      );
    });
      
    return(
      <div className="user-profile">
        <UserHeader pageUser={this.props.pageUser} />
        <div className="user-main">
          <div className="user-mid-col">
            <Switch>
              <Route
                exact exact path={"/users/:userId"}
                render={props => (
                  <UserAlbumItemList
                    {...props}
                    albumItems={albumItems}
                  />
                )}
              />
            </Switch>
            {/* MAKE SWITCH WITH ALBUMID AS PARAM */}
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