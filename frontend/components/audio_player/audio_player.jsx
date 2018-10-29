import React from "react";
import { withRouter } from "react-router-dom";

class AudioPlayer extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			cTrackTitle: this.props.cTrackTitle,
			cTrackUrl: this.props.cTrackUrl,
			cTrackNum: this.props.cTrackNum,
			album: this.props.album,
			playing: false,
			duration: null,
			cTime: null,
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
				cTime: this.audio.currentTime,
				progress: 0
			});}.bind(this);
			
			this.audio.onplay = () => {
				this.currentTimeInterval = setInterval( () => {
					this.setState({
						cTime: this.audio.currentTime,
						progress: this.audio.currentTime / this.audio.duration * 250
					});
				}, 500);

				this.props.handlePlay();
		};
		
		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
			this.setState({ playing: false});
			
			if(this.state.progress > 249.0 && this.state.cTrackNum < this.props.tracks.length - 1) {
				this.handleTrack(1);
			}

			this.props.handlePause();
		};
	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.album.id !== this.state.album.id) {
			this.setState({ 
				cTrackUrl: nextProps.cTrackUrl,
				cTrackNum: nextProps.cTrackNum,
				autoPlay: false,
				playing: false
			});
		} 
		
		if(nextProps.tracks[nextProps.cTrackNum]) {
			this.setState({
				cTrackTitle: nextProps.tracks[nextProps.cTrackNum].title
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
		let newTrackNum = this.state.cTrackNum + direction;
		const trackLen = this.props.tracks.length;
		newTrackNum = ((newTrackNum % trackLen) + trackLen) % trackLen;
		const newTrackUrl = this.props.tracks[newTrackNum].audio_url;
		const newTrackTitle = this.props.tracks[newTrackNum].title;

		this.setState({
			cTrackUrl: newTrackUrl,
			cTrackNum: newTrackNum,
			cTrackTitle: newTrackTitle,
			autoPlay: true,
			playing: true
		});
	}

	handleDragSlider (e) {
		const newTime = e.currentTarget.value / 250 * this.state.duration
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
								className={`${this.state.playing ? "playing " : ""}play-pause`}
								onClick={() => this.handlePlay() }
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
