import { connect } from "react-redux";
import AudioPlayer from "./audio_player";

const mapStateToProps = (state, ownProps) => {
	const currentTrack = state.entities.currentTrack || {};
  const defaultTrack = ownProps.tracks.filter((track) => {
		return track.list_num === 1; 
	}) || [];
	
	return { currentTrack, defaultTrack };
};

export default connect(
  mapStateToProps,
  null
)(AudioPlayer);