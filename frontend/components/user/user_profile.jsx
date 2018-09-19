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

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pageUserId !== nextProps.match.params.pageUserId) {
      this.props.requestSinglePokemon(nextProps.match.params.pageUserId);
    }
  }

  getCover(album) {
    return (
      <Link 
        key={album.id} 
        to={`/users/${this.props.pageUserId}/albums/${album.id}`}
      >
        <img 
          className="user-cover-thumb"
          src={album.cover_url}
        />
      </Link>
    );
  }
  
  render() {
    const cover_rows = [];
    const albums = this.props.userAlbums;

    for(let i = 0; i < albums.length; i = i + 2) {
      const row = (
        <tr key={i}>
          <td>{this.getCover(albums[i])}</td>
          <td>
            {i + 1 < albums.length ? this.getCover(albums[i + 1]) : ""}
          </td>
        </tr>
      )

      cover_rows.push(row);
    }

    return(
      <div className="user-profile">
        <UserHeader pageUser={this.props.pageUser} />
        <div className="user-main">
          <div className="user-mid-col">
            <table>
              <tbody>
                {cover_rows}
              </tbody>
            </table>
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