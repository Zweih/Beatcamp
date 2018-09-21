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

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: false,
    };
  }

  componentDidMount() {
    this.props.fetchAlbums();
    this.setState({keys: this.getDailyAlbums()})
  }

  getDailyAlbums() {
    return Object.keys(this.props.allAlbums);
  }

  componentWillReceiveProps(nextProps) {
    // TODO: NEW PURCHASES
    this.setState({keys: this.getDailyAlbums()})
  }
  
  render() {
    const keys = this.getDailyAlbums();

    return (
      <div className="user-profile">
        <div className="user-main">
          <div className="bc-daily">
            <h3 className="bc-daily-title">BEATCAMP DAILY</h3>
            <div className="bc-d-top">
              <div className="bc-d-first">
                <img src={this.allAlbums ? this.allAlbums[keys[0]].cover_url : ""}/>
              </div>
              <div className="bc-d-item">
                 
              </div>
              <div className="bc-d-item">
                 
              </div>
            </div>
            <div className="bc-d-bottom">
              <div className="bc-d-item">
                 
              </div>
              <div className="bc-d-item">
                 
              </div>
              <div className="bc-d-item">
                 
              </div>
              <div className="bc-d-item">
                 
              </div>
              <div className="bc-d-item">
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);