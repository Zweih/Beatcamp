import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/session_actions";
import { 
	selectUser,
	selectAlbums
 } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
	const currentUser = state.entities.users[state.session.id];
	const pageUserId = parseInt(ownProps.match.params.userId);
	const pageUser = selectUser(state.entities, pageUserId);
	const albums = selectAlbums(state.entities, pageUser);
	
	return { currentUser, pageUser, pageUserId, albums };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: (userId) => dispatch(fetchUser(userId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfile);