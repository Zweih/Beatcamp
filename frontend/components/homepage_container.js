import { connect } from "react-redux";
import Homepage from "./homepage";
import { fetchHomeAlbums } from "../actions/album_actions";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	const homeAlbums = Object.values(state.entities.albums);
	
	return { currentUser, homeAlbums };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHomeAlbums: () => dispatch(fetchHomeAlbums()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);