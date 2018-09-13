import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  const errors = state.errors;
  const currentUser = state.entities.users[state.session.id];
  const formType = "Sign Up";
  const navLink = <Link to="/signin">Go to sign in page</Link>;

  return { currentUser, formType, navLink, errors };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);