import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import BrowseNav from "./browse_nav";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BrowseNav);