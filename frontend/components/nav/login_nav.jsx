import React from "react";
import { Provider } from "react-redux";
import {
	Link
} from "react-router-dom";

const LoginNav = () => (
	<div>
		<div id="login-header-wrapper">
			<header className="login-main-header">
				<div className="login-left-header">
					<Link to="/" className="logo">
						<img src="https://s3.amazonaws.com/beatcamp-pro/bc-logotype-color-64.png"/>
					</Link>
				</div>
				<header className="login-right-header">
				</header>
			</header>
		</div>
	</div>
);

export default LoginNav;