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
			playing: false,
			trackBold: false
		};
	}

	componentDidMount() {
		this.props.fetchAlbum(this.props.albumId);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.match.params.albumId !== nextProps.match.params.albumId) {
			this.props.fetchAlbum(nextProps.match.params.albumId);
			this.setState({ 
				trackBold: false,
				playing: false });
		}
	}

	handleTrackPlay(isPlaying) {
		this.setState({ playing: isPlaying });

		// only change on first play
		if(isPlaying) {
			this.setState({ trackBold: true })
		}
	}
	
	handleTrackChange(trackNum) {
		this.setState({ cTrackNum: trackNum });
	}

	render() {
		const trackListings = this.props.albumTracks.map((track, idx) => {
			return (
				<li key={idx}>
					<span onClick={() => {
						if(idx !== this.state.cTrackNum) { 
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
					<span
						className="track-info"
						onClick={() => {this.handleTrackChange(idx)}}
						id={this.state.trackBold && this.state.cTrackNum === idx ? "track-bold" : "idx"}
					>
						<p className="track-num">{idx + 1}. </p>
						<p className="track-title">{track.title}</p>
					</span>
					<p
					>
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
								{
									this.props.albumTracks.length > 0 ? 
									<div className="audio-player">
										<AudioPlayerContainer
											trackIds={this.props.albumTrackIds}
											album={this.props.userAlbum}
											cTrackNum={this.state.cTrackNum}
											playing={this.state.playing}
											handleTrackPlay={this.handleTrackPlay}
											handleTrackChange={this.handleTrackChange}
										/>
									</div> : ""
								}
							<div className="buy-info">
								<h3 className="digital-album">
									Digital Album
								</h3>
								<h4 className="streaming">
									Streaming
								</h4>
								<p className="purchase-info">
									Includes unlimited streaming via the free Beatcamp web-app.
								</p>
							</div>
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