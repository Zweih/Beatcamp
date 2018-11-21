import React from "react";
import {
	Route,
	Switch,
	Link,
	withRouter
} from "react-router-dom";

import UserHeader from "./user_header";
import AlbumItemList from "../album/album_item_list";
import AlbumDetailContainer from "../album/album_detail_container";

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchUser(this.props.pageUserId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.pageUserId !== nextProps.match.params.pageUserId) {
			this.props.fetchUser(nextProps.match.params.pageUserId);
		}
	}
	
	render() {
		return (
			<div className="user-profile">
				<UserHeader pageUser={this.props.pageUser} />
				<div className="user-main">
					<div className="user-mid-col">
						<Switch>
							<Route
								exact path={`/users/${this.props.pageUserId}`}
								render={props => (
									<AlbumItemList
										{...props}
										userAlbums={this.props.userAlbums}
										pageUserId={this.props.pageUserId}
									/>
								)}
							/>
							<Route
								path={`/users/:userId/albums/:albumId`}
								component={AlbumDetailContainer}
							/>
						</Switch>
					</div>
					<section className="user-sidebar">
						{ this.props.pageUser.avatar_url ? <img className="user-avatar" src={this.props.pageUser.avatar_url}
						/> : "" }
						<p className="user-title-location">
							<span className="user-title">{this.props.pageUser.username}</span>
							<span className="user-location">{this.props.pageUser.location}</span>
						</p>
						<p className="user-bio">
							{this.props.pageUser.bio}
						</p>
						 { this.props.currentUser && this.props.currentUser.id === this.props.pageUserId ?
							<Link to={`/users/${this.props.currentUser.id}/edit`}>
								<button className="user-button">
									Edit Profile
								</button>
							</Link>
						: ""}
						<h3>discography</h3>
							<AlbumItemList
								userAlbums={this.props.userAlbums}
								pageUserId={this.props.pageUserId}
							/>
					</section>
				</div>
			</div>
		);
	}
}

export default withRouter(UserProfile);