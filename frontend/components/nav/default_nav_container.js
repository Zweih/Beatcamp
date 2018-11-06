import { connect } from "react-redux";
import DefaultNav from "./default_nav";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	return { currentUser };
};

export default connect(
	mapStateToProps
)(DefaultNav);