import React from "react";
import { Link } from "react-router-dom";

const LeftGreeting = ({ currentUser }) => {
	const notLoggedIn = () => (
		<p className="header-text">
			Discover amazing new music and directly support the artists who make it.
		</p>
	);

	const loggedIn = () => (
		<ul className="header-links">
			<li>
				<img src={currentUser.avatar_url}></img>
				<p className="header-link username">Hi {currentUser.username}</p>
			</li>
			<li>
				<Link 
					className="header-link"
					to={`/users/${currentUser.id}`}
				>
					collection
				</Link>
			</li>
		</ul>
	);

	return (
		<nav className="left-greeting">
			{currentUser ? loggedIn() : notLoggedIn()}
		</nav>
	);
}

export default LeftGreeting;