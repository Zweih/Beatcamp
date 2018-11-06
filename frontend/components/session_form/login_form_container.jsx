import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, demo, clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	const errors = state.errors.session;
	const formType = "Log in";
	const formClass = "login";
	const navLink = <Link to="/signup">Sign up</Link>;
	const linkText = "Don't";

	return { errors, formType, formClass, navLink, linkText, currentUser };
};

const mapDispatchToProps = (dispatch) => {
	return {
		processForm: (user) => dispatch(login(user)),
		demo: () => dispatch(demo()),
		clearSessionErrors: () => dispatch(clearSessionErrors()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm);