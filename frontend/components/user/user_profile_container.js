import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const pageUser = state.entities.users[ownProps.match.params.userId];

  return { currentUser, pageUser };
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