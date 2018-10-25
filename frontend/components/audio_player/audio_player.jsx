import React from "react";
import { withRouter } from "react-router-dom";

class AudioPlayer extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			currentTrackUrl: this.props.defaultTrackUrl,
			currentTrackNum: this.props.defaultTrackNum,
			currentTrackTitle: "",
			album: this.props.album,
			playing: false,
			duration: null,
			currentTime: null,
			progress: 0
		}

		this.handleTrack = this.handleTrack.bind(this);
		this.handlePlay = this.handlePlay.bind(this);
		this.handleDragSlider = this.handleDragSlider.bind(this);
	}

	componentDidMount() {
		this.audio.onloadedmetadata = function() {
			this.setState({
				duration: this.audio.duration,
				currentTime: this.audio.currentTime,
				progress: 0,
		});}.bind(this);

		this.audio.onplay = () => {
			this.currentTimeInterval = setInterval( () => {
				this.setState({
					currentTime: this.audio.currentTime,
					progress: this.audio.currentTime / this.audio.duration * 250
				});
			}, 500);
		};

		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
			
			if(this.state.progress > 249.0) {
				this.handleTrack(1);
			}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.album.id !== this.state.album.id) {
			this.setState({ 
				currentTrackUrl: nextProps.defaultTrackUrl,
				currentTrackNum: nextProps.defaultTrackNum,
				autoPlay: false,
				playing: false
			});
		}

		if(this.props.tracks[this.props.defaultTrackNum]) {
			this.setState({
				currentTrackTitle: this.props.tracks[this.props.defaultTrackNum].title
			});
		}
	}

	handlePlay() {
		this.setState({playing: !this.state.playing});

		if(this.audio) {
			this.state.playing ? this.audio.pause() : this.audio.play();
		}
	}

	handleTrack(direction) {
		let newTrackNum = this.state.currentTrackNum + direction;
		const trackLen = this.props.tracks.length;
		newTrackNum = ((newTrackNum % trackLen) + trackLen) % trackLen;
		const newTrackUrl = this.props.tracks[newTrackNum].audio_url;
		const newTrackTitle = this.props.tracks[newTrackNum].title;

		this.setState({
			currentTrackUrl: newTrackUrl,
			currentTrackNum: newTrackNum,
			currentTrackTitle: newTrackTitle,
			autoPlay: true,
			playing: true
		});
	}

	handleDragSlider (e) {
		const newTime = e.currentTarget.value / 250 * this.state.duration
		this.audio.currentTime = newTime;
		
		this.setState({
			currentTime: newTime,
			progress: e.currentTarget.value
		});
  }

	// credit: SO user GitaarLAB
	fmtMSS(s) {
		s = ~~s
		return(s-(s%=60))/60+(9<s?':':':0')+s
	}

	render() {
		return (
			<div>
					<div className="inline-player">
						<audio
							ref={(audio) => { this.audio = audio }}
							src={this.state.currentTrackUrl}
							autoPlay={this.state.autoPlay}
						/>
						<div id="central-controls">
							<span 
								className={`${this.state.playing ? "playing " : ""}play-pause`}
								onClick={() => this.handlePlay() }
								></span>
							<div className="middle-top">
								<p className="song-title">
									{this.state.currentTrackTitle}
								</p>
								<p>
									{this.state.duration ?
									this.fmtMSS(this.state.currentTime) + " / " + this.fmtMSS(this.state.duration)
									: ""}
								</p>
							</div>
							<input 
								type="range"
								value={this.state.progress ? this.state.progress : 0}
								onChange={this.handleDragSlider}
								min="1"
								max="250"
								className="progress-slider"
							/>
							<span 
								className="prev"
								onClick={() => this.handleTrack(-1)}
							></span>
							<span
								className="next"
								onClick={() => this.handleTrack(1)}
							></span>
						</div>
					</div>
			</div>
		);
	}
}

export default withRouter(AudioPlayer);
