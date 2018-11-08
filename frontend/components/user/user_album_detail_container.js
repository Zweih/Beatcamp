import { connect } from "react-redux";
import { selectUserAlbum, selectAlbumTracks } from "../../reducers/selectors";
import { fetchAlbum } from "../../actions/album_actions";
import UserAlbumDetail from "./user_album_detail";

const mapStateToProps = (state, ownProps) => {
	const currentUser = state.entities.users[state.session.id];
	const albumId = ownProps.match.params.albumId;
	const pageUserId = parseInt(ownProps.match.params.userId);
	const userAlbum = selectUserAlbum(state.entities, albumId);

	const albumTrackIds = userAlbum.track_ids.sort((a, b) => {
		return a - b;
	});

	const albumTracks = selectAlbumTracks(state.entities, albumTrackIds);

	return {
		userAlbum,
		albumId,
		pageUserId,
		currentUser,
		albumTracks,
		albumTrackIds
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserAlbumDetail);