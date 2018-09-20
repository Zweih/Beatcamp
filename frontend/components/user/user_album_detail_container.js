import { connect } from "react-redux";
import { selectUserAlbum } from "../../reducers/selectors";
import { fetchAlbum } from "../../actions/album_actions";
import UserAlbumDetail from "./user_album_detail";

const mapStateToProps = (state, ownProps) => {
  const albumId = ownProps.match.params.albumId
  const userAlbum = selectUserAlbum(state.entities, albumId);
  return { userAlbum, albumId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAlbumDetail);