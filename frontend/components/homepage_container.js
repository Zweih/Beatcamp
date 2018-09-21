import { connect } from "react-redux";
import Homepage from "./homepage";
import { fetchAlbums } from "../actions/album_actions";

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const allAlbums = state.entities.albums;
  
  return { currentUser, allAlbums };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);