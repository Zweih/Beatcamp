import { connect } from "react-redux";
import AudioPlayer from "./audio_player";

const mapStateToProps = (state, ownProps) => {
	const album = ownProps.album;
	const tracks = ownProps.tracks.sort((a, b) => {
		return a.list_num - b.list_num;
	});

	const cTrackNum = ownProps.cTrackNum || 0;
	const cTrackUrl = tracks[cTrackNum] ? tracks[cTrackNum].audio_url : "";
	const cTrackTitle = tracks[cTrackNum] ? tracks[cTrackNum].title : "";

	return { 
		tracks, 
		album, 
		cTrackUrl,
		cTrackTitle,
		cTrackNum
	};
};

export default connect(
  mapStateToProps,
  null
)(AudioPlayer);