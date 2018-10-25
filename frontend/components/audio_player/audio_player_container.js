import { connect } from "react-redux";
import AudioPlayer from "./audio_player";

const mapStateToProps = (state, ownProps) => {
	const album = ownProps.album;
	const tracks = ownProps.tracks.sort((a, b) => {
		return a.list_num - b.list_num;
	});

	const defaultTrackUrl = tracks[0] ? tracks[0].audio_url : "";
	const defaultTrackNum = 0;

	return { tracks, album, defaultTrackUrl, defaultTrackNum };
};

export default connect(
  mapStateToProps,
  null
)(AudioPlayer);