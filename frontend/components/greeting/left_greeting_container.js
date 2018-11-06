import { connect } from "react-redux";
import LeftGreeting from "./left_greeting";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	return { currentUser };
};

export default connect(
	mapStateToProps
)(LeftGreeting);