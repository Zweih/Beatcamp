import React from "react";
import {
	Link,
	withRouter,
} from "react-router-dom";

class Homepage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.homeAlbums < 9) {
			this.props.fetchHomeAlbums();
		}
	}

	render() {
		return (
			<div className="content-container">
				{this.props.homeAlbums.length > 5 ? 
				<div className="home-main">
					<Link to={`users/${this.props.homeAlbums[0].user_id}`}>
						<div
							className="home-large"
							style={{ backgroundImage: "url(https://f4.bcbits.com/img/0014498149_0)"}}
							>
							<p>{this.props.homeAlbums[0].user}</p>
						</div>
					</Link>
					<ul className="home-small">
						<Link to={`users/${this.props.homeAlbums[1].user_id}`}>
							<li
								style={{ backgroundImage: "url(https://f4.bcbits.com/img/0014498598_170.jpg)"}}
							>
								<p>{this.props.homeAlbums[1].user}</p>
							</li>
						</Link>
						<Link to={`users/${this.props.homeAlbums[2].user_id}`}>
							<li
								style={{ backgroundImage: "url(https://f4.bcbits.com/img/0014497570_170.jpg)"}}
							>
								<p>{this.props.homeAlbums[2].user}</p>
							</li>
						</Link>
						<Link to={`users/${this.props.homeAlbums[3].user_id}`}>
							<li
								style={{ backgroundImage: "url(https://f4.bcbits.com/img/0014504111_170.jpg)"}}
							>
								<p>{this.props.homeAlbums[3].user}</p>
							</li>
						</Link>
					</ul>
				</div> : "" }
				<div className="featured-albums-divider">
					<h3>NEW AND NOTABLE ALBUMS</h3>
				</div>
				<div className="featured-albums">
					{this.props.homeAlbums.length > 4 ?
					this.props.homeAlbums.slice(-5).map((album, idx) => {
						return (
						<div key={idx} className="home-album">
							<Link 
								to={`/users/${album.user_id}/albums/${album.id}`}
							>
							<div className="home-album-cover">
								<img src={album.cover_url}/>
							</div>
							<p className="home-album-title">
								{album.title}
							</p>
							<p className="home-album-artist">
								{`by ${album.user}`}
							</p>
							<p className="home-album-description">
								{album.description}
							</p>
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