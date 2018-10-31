import { connect } from "react-redux";
import AudioPlayer from "./audio_player";

const mapStateToProps = (_, ownProps) => {
	const tracks = ownProps.tracks.sort((a, b) => {
		return a.list_num - b.list_num;
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

export default connect(
  mapStateToProps,
  null
)(AudioPlayer);