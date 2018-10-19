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
          <div className="user-album-detail">
            <div className="left-album-col">
              <h1 className="user-album-title">
                {this.props.userAlbum.title}
              </h1>
							{console.log(this.props.albumTracks)}
              <p className="user-album-artist">
                by <Link className="user-album-artist-link" to={`/users/${this.props.pageUserId}`}>{this.props.userAlbum.user}</Link>
              </p>
              {/* { this.props.currentUser.id === this.props.pageUserId ?
                <Link to={`/users/${this.props.currentUser.id}/albums/${this.props.userAlbum.id}/edit`}>
                  <button>
                    Edit Album
                  </button>
                </Link>
              : ""} */}
              <div>
                {/* {TODO: ALBUM PURCHASE / STREAM INFO
                     SONG PLAYER */}
              </div>
							<h3 className="digital-album">
								Digital Album
							</h3>
							<h4 className="streaming">
								Streaming
							</h4>
							<p className="purchase-info">
								Includes unlimited streaming via the free Beatcamp app.
							</p>
              <p className="user-album-desc">
                {this.props.userAlbum.description}
              </p>
            </div>
            <div className="right-album-col">
              <a href={this.props.userAlbum.cover_url}>
                <img 
                  className="user-album-cover"
                  src={this.props.userAlbum.cover_url}
                />
              </a>
            </div>

            </div>
          : ""
        }
      </div>
    );
  }
}

export default withRouter(UserAlbumDetail);