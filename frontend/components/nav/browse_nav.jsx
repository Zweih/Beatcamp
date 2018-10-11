import React from "react";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
  withRouter,
  HashRouter
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

class BrowseNav extends React.Component {
  constructor(props){
    super(props);
  }

  notLoggedIn() {
    return (
      <ul className="browse-right">
        <li>
          <Link to="/signup">sign up</Link>
        </li>
        <li>
          <Link to="/login">log in</Link>
        </li>
      </ul>
    );
  }

  loggedIn() {
    return (
      <ul className="browse-right">
        <li>
          <Link to={`/users/${this.props.currentUser.id}`}>
            collection
          </Link>
        </li>
        <li className="browse-logout">
          <a onClick={this.props.logout}>
            logout
          </a>
        </li>
      </ul>
    )
  }
  
  render() {
    return (
      <div>
        <div id="browse-wrapper">
          <header className="browse-header">
            <ul className="browse-left">
              <li>
                <Link to="/" className="browse-logo">
                  <img src="https://s3.amazonaws.com/beatcamp-pro/bc-logotype-color-64.png"/>
                </Link>
              </li>
              <li>
                <Link to="/discover">
                  discover
                </Link>
              </li>
              <li>
                <form className="search-form">
                  <input
                    className="search-bar"
                    type="text"
                    placeholder="search Beatcamp"
                  />
                  <span className="search-submit-span">
                    <button 
                      className="search-submit"
                      type="submit"
                    >
                      <i className="fas fa-search fa-lg"></i>
                    </button>
                  </span>
                </form>
              </li>
            </ul>
            {this.props.currentUser ? this.loggedIn() : this.notLoggedIn()}
          </header>
        </div>
      
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer}/>
          <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(BrowseNav);