import React from "react";
import { withRouter } from "react-router-dom";

class AudioPlayer extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			album: this.props.album,
			cTrackTitle: this.props.cTrackTitle,
			cTrackUrl: this.props.cTrackUrl,
			cTrackNum: this.props.cTrackNum,
			playing: this.props.playing,
			loading: true,
			autoPlay: false,
			duration: null,
			cTime: null,
			progress: 0
		}
		
		this.handleTrack = this.handleTrack.bind(this);
		this.handleDragSlider = this.handleDragSlider.bind(this);
	}
	
	componentDidMount() {
		this.audio.onloadedmetadata = function() {
			this.setState({
				duration: this.audio.duration,
				cTime: this.audio.currentTime,
				isPrev: this.props.cTrackNum > 0,
				isNext: this.props.cTrackNum < this.props.tracks.length - 1,
				progress: 0,
				loading: false
			});}.bind(this);
			
		this.audio.onplay = () => {

			this.currentTimeInterval = setInterval( () => {
				this.setState({
					cTime: this.audio.currentTime,
					progress: this.audio.currentTime / this.audio.duration * 250
				});
			}, 500);
		};
		
		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
			
			if(this.state.progress > 249) {
				this.handleTrack(1);
			}
		};
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.album.id != prevState.album.id) {
			nextProps.handleTrackChange(0);
			nextProps.handleTrackPlay(false);

			return ({ 
				album: nextProps.album,
				tracks: nextProps.tracks,
				cTrackNum: nextProps.cTrackNum,
				cTrackTitle: nextProps.cTrackTitle,
				cTrackUrl: nextProps.cTrackUrl,
				autoPlay: false,
				loading: true
			});
		}
		
		if(prevState.cTrackNum != nextProps.cTrackNum) {
			return ({
				cTrackNum: nextProps.cTrackNum,
				cTrackTitle: nextProps.tracks[nextProps.cTrackNum].title,
				cTrackUrl: nextProps.tracks[nextProps.cTrackNum].audio_url,
				loading: true
			});
		}

		if(prevState.playing != nextProps.playing) {
			return ({
				playing: nextProps.playing,
				autoPlay: nextProps.playing
			});
		}

		return null;
	}

	componentDidUpdate(prevProps, _) {
		if(this.props.playing != prevProps.playing && this.audio) {
			this.props.playing ? this.audio.play() : this.audio.pause();
		}
	}

	handleTrack(direction) {
		let newTrackNum = this.state.cTrackNum + direction;
		const trackLen = this.props.tracks.length;
		const isPlaying = (newTrackNum < trackLen);
		newTrackNum = ((newTrackNum % trackLen) + trackLen) % trackLen;
		const newTrackUrl = this.props.tracks[newTrackNum].audio_url;
		const newTrackTitle = this.props.tracks[newTrackNum].title;

		this.setState({
			cTrackUrl: newTrackUrl,
			cTrackNum: newTrackNum,
			cTrackTitle: newTrackTitle,
			loading: true,
			autoPlay: true
		});

		this.props.handleTrackPlay(isPlaying);
		this.props.handleTrackChange(newTrackNum);
	}

	handleDragSlider (e) {
		const newTime = e.currentTarget.value / 250 * this.state.duration;
		this.audio.currentTime = newTime;
		
		this.setState({
			cTime: newTime,
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
							src={this.state.cTrackUrl}
							autoPlay={this.state.autoPlay}
						/>
						<div id="central-controls">
							<span 
								className={`${this.state.playing ? "playing" : ""} ${this.state.loading ? "loading" : "pause"} play-pause`}
								onClick={() => this.props.handleTrackPlay(!this.state.playing) }
								></span>
							<div className="middle-top">
								<p className="song-title">
									{this.state.cTrackTitle}
								</p>
								<p>
									{this.state.duration ?
									this.fmtMSS(this.state.cTime) + " / " + this.fmtMSS(this.state.duration)
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
								className={`prev ${this.state.isPrev ? "" : "no-click"}`}
								onClick={() => this.handleTrack(-1)}
							>
								<i className="fas fa-fast-backward"></i>
							</span>
							<span
								className={`next ${this.state.isNext ? "" : "no-click"}`}
								onClick={() => this.handleTrack(1)}
							>
								<i className="fas fa-fast-forward"></i>
							</span>
						</div>
					</div>
			</div>
		);
	}
}

export default withRouter(AudioPlayer);
