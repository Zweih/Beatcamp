import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];

  const defaultUser = {
    username: "",
  };

  const pageUserId = ownProps.match.params.userId;
  const pageUser = state.entities.users[pageUserId] || defaultUser;

  return { currentUser, pageUser, pageUserId};
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