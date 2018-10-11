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
  }

  componentDidMount() {
    this.props.fetchHomeAlbums();
  }

  render() {
    return (
      <div>
        {this.props.homeAlbums.length > 5 ? 
        <div className="home-main">
          <div className="home-large"><Link to={`users/${this.props.homeAlbums[0].user_id}`}><img src="https://f4.bcbits.com/img/0014498149_0"/></Link></div>
          <ul className="home-small">
            <li><Link to={`users/${this.props.homeAlbums[8].user_id}`}><img src="https://f4.bcbits.com/img/0014498598_170.jpg"/></Link></li>
            <li><Link to={`users/${this.props.homeAlbums[7].user_id}`}><img src="https://f4.bcbits.com/img/0014497570_170.jpg"/></Link></li>
            <li><Link to={`users/${this.props.homeAlbums[9].user_id}`}><img src="https://f4.bcbits.com/img/0014504111_170.jpg"/></Link></li>
          </ul>
        </div> : "" }
          <div className="featured-albums">
            {this.props.homeAlbums.length > 5 ?
            this.props.homeAlbums.slice(2, 7).map((album, idx) => {
              return (
              <div key={idx + "a"} className="home-album">
                <Link 
                  key={idx + "b"}
                  to={`/users/${album.user_id}/albums/${album.id}`}
                >
                <li key={idx + "c"} className="home-album-cover">
                <img key={idx + "d"} src={album.cover_url}/></li>
                <li key={idx + "e"} className="home-album-artist">{album.artist}</li>
                <li key={idx + "f"} className="home-album-title">{album.title}</li>
                </Link>
              </div>
              );
            }) : ""}
          </div>
      </div>
    );
  }
}

export default withRouter(Homepage);