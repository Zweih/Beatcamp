import React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import AudioPlayerContainer from "../audio_player/audio_player_container";

class UserAlbumDetail extends React.Component {
  constructor(props) {
		super(props);
		this.handleTrackChange = this.handleTrackChange.bind(this);
		this.handleTrackPlay = this.handleTrackPlay.bind(this);
		
		this.state = {
			cTrackNum: 0,
			playing: false
		};
  }

  componentDidMount() {
		this.props.fetchAlbum(this.props.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
	}

	handleTrackPlay(isPlaying) {
		this.setState({ playing: isPlaying });
	}
	
	handleTrackChange(trackNum) {
		this.setState({ cTrackNum: trackNum });
	}

  render() {
		const trackListings = this.props.albumTracks.map((track, idx) => {
			return (
				<li key={idx}>
					<span onClick={() => {
						if(idx != this.state.cTrackNum) { 
							this.handleTrackPlay(true);
						} else {
							this.handleTrackPlay(!this.state.playing);
						}
						this.handleTrackChange(idx);
					}}
						className="track-play">
						<i 
						className={`fa ${this.state.playing && this.state.cTrackNum === idx ? "fa-pause" : "fa-play"}`}
						aria-hidden="true"></i>
					</span>
					<p onClick={() => {this.handleTrackChange(idx)}}>
						{idx + 1}. {track.title}
					</p>
				</li>
			);
		})

    return (
      <div>
        {
          this.props.userAlbum ?
          <div className="user-album-detail">
            <div className="left-album-col">
              <h1 className="user-album-title">
                {this.props.userAlbum.title}
              </h1>
							
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
								{
									this.props.albumTracks.length > 0 ? 
									<AudioPlayerContainer
										tracks={this.props.albumTracks}
										album={this.props.userAlbum}
										cTrackNum={this.state.cTrackNum}
										playing={this.state.playing}
										handleTrackPlay={this.handleTrackPlay}
										handleTrackChange={this.handleTrackChange}
									/> : ""
								}
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
							<ul className="track-listings">
								{trackListings ? trackListings : ""}
							</ul>
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