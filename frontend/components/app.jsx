import React from "react";
import {
	Route,
	Switch,
	HashRouter
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util"; 

import DefaultNavContainer from "./nav/default_nav_container";
import LoginNav from "./nav/login_nav";
import LoginFormContainer from "./session_form/login_form_container";
import BrowseNavContainer from "./nav/browse_nav_container";
import UserProfileContainer from "./user/user_profile_container";
import UserProfileEditContainer from "./user/user_profile_edit_container";
import AlbumEditContainer from "./user/album_edit_container";
import HomepageContainer from "./homepage_container";
import ParkingPage from "./parking_page";

const App = () => (
	<div>
		<HashRouter>
			<div>
				<Switch>
					<AuthRoute exact path="/login" component={LoginNav} />
					<Route exact path="/" component={DefaultNavContainer} />
					<Route exact path="/signup" component={DefaultNavContainer} />
					<Route path="/" component={BrowseNavContainer} />
				</Switch>
				<section className="content-section">
					<Switch>
						<Route exact path="/" component={HomepageContainer} />
						<ProtectedRoute exact path="/users/:userId/edit" component={UserProfileEditContainer} />
						<ProtectedRoute exact path="/users/:userId/albums/:albumId/edit" component={AlbumEditContainer} />
						<Route path="/users/:userId" render={(props) => (
							<UserProfileContainer key={props.match.params.userId} {...props} />)
						} />
						<AuthRoute exact path="/login" component={LoginFormContainer} />
						<Route exact path="/discover" component={ParkingPage} />
					</Switch>
				</section>
			</div>
		</HashRouter>
	</div>
);

export default App;
