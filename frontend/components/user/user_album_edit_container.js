import { connect } from "react-redux";
import UserAlbumEdit from "./user_album_edit";
import { 
	clearAlbumErrors,
	fetchAlbum,
	updateAlbum } from "../../actions/album_actions";

import { selectUserAlbum } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
	const currentUser = state.entities.users[state.session.id];
	const albumUserId = parseInt(ownProps.match.params.userId);
	const albumId = parseInt(ownProps.match.params.albumId);
	const userAlbum = selectUserAlbum(state.entities, albumId);
	const errors = state.errors.album;
	const formType = "Album Edit";
	const formClass = "a-edit";

	return {
		errors,
		formType,
		formClass,
		currentUser,
		userAlbum,
		albumId,
		albumUserId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		processForm: (album, user) => dispatch(updateAlbum(album, user)),
		fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
		clearAlbumErrors: () => dispatch(clearAlbumErrors()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserAlbumEdit);