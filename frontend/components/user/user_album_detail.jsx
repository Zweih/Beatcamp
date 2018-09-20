import React from "react";
import {
  Route,
  Link,
  withRouter
} from "react-router-dom";


class UserAlbumDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchAlbum(this.props.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.album ?
          <div className="UserAlbumDetail">
            <div className="left-album-col">
              <p></p>
            </div>
            <div className="right-album-col">
          </div> 
            
            </div>
          : ""
        }
      </div>
    );
  }
}

export default withRouter(UserAlbumDetail);