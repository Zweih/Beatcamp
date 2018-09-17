import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <ul className="header-links">
        <li>
          <Link 
          className="header-link"
            to="/signup"
          >
            sign up
          </Link>
        </li>
        <li>
          <Link
            className="header-link"
            to="/login"
          >
            log in
          </Link>
        </li>
      </ul>
    </nav>
  );

  const personalGreeting = () => (
    <nav className="login-signup">
      <ul className="header-links">
        <li>
          <p className="header-link" onClick={logout}>
            log out
          </p>
        </li>
      </ul>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;