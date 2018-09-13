import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => (
    <nav className="logged-out">
      <Link to="/login">
        Login!
      </Link>
      &nbsp;or&nbsp;
      <Link to="/signup">
        Sign up!
      </Link>
    </nav>
  );

  const loggedIn = () => (
    <div className="logged-in">
      <h2 className="heading-user-name">
        Hi, {currentUser.username}!
      </h2>
      <button
        className="heading-button"
        onClick={logout}
      >
        Log Out!
      </button>
    </div>
  );

  return (
    currentUser ? loggedIn() : loggedOut()
  );
};

export default Greeting;