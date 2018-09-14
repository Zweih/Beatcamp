import React from "react";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util"; 

import GreetingContainer from "../greeting/greeting_container";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

class DefaultNav extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <div id="header-wrapper">
          <header className="main-header">
            <div className="left-header">
              <Link to="/" className="logo">
                <img src="https://my.mixtape.moe/eohwhz.png"/>
              </Link>
              <p className="header-text">
                Discover amazing new music and directly support the artists who make it.
              </p>
            </div>
            <div className="right-header">
              <form className="search-form">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search for artist, track or album"
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
              <GreetingContainer />
            </div>
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

export default DefaultNav;