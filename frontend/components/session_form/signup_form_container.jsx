import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const errors = state.errors.session;
  const formType = "Sign Up";
  const navLink = <Link to="/login">Go to sign in page</Link>;

  return { errors, formType, navLink, currentUser };
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