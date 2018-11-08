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

	return { 
		tracks,
		cTrackUrl,
		cTrackTitle,
		cTrackNum
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