import { connect } from "react-redux";
import Homepage from "./homepage";
import { fetchHomeAlbums } from "../actions/album_actions";

const mapStateToProps = (state) => {
	const currentUser = state.entities.users[state.session.id];
	const ids = [1, 70, 104, 124, 155, 244, 306, 325, 329];
	const homeAlbums = [];

	ids.forEach((id) => {
		if(!!state.entities.albums[id]) {
			homeAlbums.push(state.entities.albums[id]);
		}
	});
	
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