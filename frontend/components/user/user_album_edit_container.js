import { connect } from "react-redux";
import UserAlbumEdit from "./user_album_edit";
import { 
	// TODO: ADD ALBUM UPDATE,
	clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	const userAlbum = selectUserAlbum(state.entities, albumId); 
	const errors = state.errors.session;
	const formType = "Album Edit";
	const formClass = "a-edit";

	return { errors, formType, formClass, currentUser, userAlbum };
};

const mapDispatchToProps = (dispatch) => {
	return {
		processForm: (user) => dispatch(updateUser(user)),
		fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
		clearSessionErrors: () => dispatch(clearSessionErrors()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserAlbumEdit);