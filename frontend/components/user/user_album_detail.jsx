import React from "react";
import {
  Route,
  Link,
  withRouter
} from "react-router-dom";

class UserAlbumDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.userAlbum ?
          <div className="UserAlbumDetail">
            <div className="left-album-col">
              <h1 className="user-album-title">
                {this.props.userAlbum.title}
              </h1>
              <p className="user-album-artist">
                by <Link to="/">{this.props.userAlbum.user}</Link>
              </p>
              <div>
                {/* {TODO: ALBUM PURCHASE / STREAM INFO
                     SONG PLAYER */}
              </div>
              <p className="user-album-desc">
                {this.props.userAlbum.description}
              </p>
            </div>
            <div className="right-album-col">
              <Link 
                className="user-album-cover"
                to={this.props.userAlbum.cover_url}
              >
                <img src={this.props.userAlbum.cover_url}/>
              </Link>
            </div>

            </div>
          : ""
        }
      </div>
    );
  }
}

export default withRouter(UserAlbumDetail);