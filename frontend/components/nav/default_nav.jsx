import React from "react";
import {
  Switch,
  Link
} from "react-router-dom";

import { AuthRoute } from "../../util/route_util"; 

import RightGreetingContainer from "../greeting/greeting_container";
import LeftGreetingContainer from "../greeting/left_greeting_container"; 
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
                <img src="https://s3.amazonaws.com/beatcamp-pro/bc-logotype-color-64.png"/>
              </Link>
              <LeftGreetingContainer />
            </div>
            <div className="right-header">
              <form className="search-form">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search for artist, track or album"
                />
                <span className="search-submit-span">
									<Link to="/discover">
										<button 
											className="search-submit"
											type="submit"
										>
											<i className="fas fa-search fa-lg"></i>
										</button>
									</Link>
                </span>
              </form>
              <RightGreetingContainer />
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