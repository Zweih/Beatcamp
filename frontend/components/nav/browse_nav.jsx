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

class BrowseNav extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <div id="header-wrapper">
          <header className="browse-header">
            <ul className="browse-left">
              <Link to="/" className="logo">
                <img src="https://my.mixtape.moe/eohwhz.png"/>
              </Link>
              <Link to="/discover">
                discover
              </Link>
              <form className="search-form">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="search Bandcamp"
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
            </ul>
            <ul className="browse-right">
              
            </ul>
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