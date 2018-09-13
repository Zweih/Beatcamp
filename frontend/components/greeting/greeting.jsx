import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <ul>
        <li>
          <Link className="header-link" to="/login">
            log in
          </Link>
        </li>
        <li>
          <Link className="header-link" to="/signup">
            sign up
          </Link>
        </li>
      </ul>
      
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">
      Hi, {currentUser.username}!
      </h2>
      <p className="header-link" onClick={logout}>
      Log Out
      </p>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;