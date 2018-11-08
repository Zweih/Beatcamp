import { connect } from "react-redux";
import AudioPlayer from "./audio_player";
import { fetchTrack } from "../../actions/track_actions";

const mapStateToProps = (state, ownProps) => {
	let tracks = ownProps.trackIds.map((id) => {
		return state.entities.tracks[id];
	});
	
	const cTrackNum = ownProps.cTrackNum || 0;
	const cTrackUrl = tracks[cTrackNum] ? tracks[cTrackNum].audio_url : "";
	const cTrackTitle = tracks[cTrackNum] ? tracks[cTrackNum].title : "";
	const cTrackDuration = tracks[cTrackNum] ? tracks[cTrackNum].length : 0;

	return { 
		tracks,
		cTrackUrl,
		cTrackTitle,
		cTrackNum,
		cTrackDuration
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);