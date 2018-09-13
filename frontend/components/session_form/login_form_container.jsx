import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, demo, clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const errors = state.errors.session;
  const formType = "Login";
  const navLink = <Link to="/signup">Go to sign up page</Link>;

  return { errors, formType, navLink, currentUser };
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