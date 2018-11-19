import React from "react";
import { Link } from "react-router-dom";

const ParkingPage = () => (
	<div className="parking-page">
	<h1>This feature is currently under construction!</h1>
	<h2>Check back later to see what we've been up to!</h2>
	<Link to="/">
		<button className="button">
			Back to Homepage
		</button>
	</Link>
	</div>
);

export default ParkingPage;