import { connect } from "react-redux";
import UserProfileEdit from "./user_profile_edit";
import { 
	updateUser,
	clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
	const currentUser = state.entities.users[state.session.id];
	const pageUserId = parseInt(ownProps.match.params.userId);
	const errors = state.errors.session;
	const formType = "User Edit";
	const formClass = "u-edit";

	return {
		errors,
		formType,
		formClass,
		currentUser,
		pageUserId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		processForm: (user) => dispatch(updateUser(user)),
		clearSessionErrors: () => dispatch(clearSessionErrors()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileEdit);