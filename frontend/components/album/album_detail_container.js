import { connect } from "react-redux";
import { selectAlbum, selectAlbumTracks } from "../../reducers/selectors";
import { fetchAlbum } from "../../actions/album_actions";
import AlbumDetail from "./album_detail";

const mapStateToProps = (state, ownProps) => {
	const currentUser = state.entities.users[state.session.id];
	const albumId = ownProps.match.params.albumId;
	const pageUserId = parseInt(ownProps.match.params.userId);
	const album = selectAlbum(state.entities, albumId);

	const albumTrackIds = album.track_ids.sort((a, b) => {
		return a - b;
	});

	const albumTracks = selectAlbumTracks(state.entities, albumTrackIds);

	return {
		album,
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
)(AlbumDetail);