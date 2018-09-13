import { connect } from "react-redux";
import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);