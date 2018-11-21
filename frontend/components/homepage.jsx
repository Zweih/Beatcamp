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
		this.props.fetchHomeAlbums();
	}

	render() {
		return (
			<div className="content-container">
				{this.props.homeAlbums.length > 5 ? 
				<div className="home-main">
					<div className="home-large"><Link to={`users/${this.props.homeAlbums[0].user_id}`}><img src="https://f4.bcbits.com/img/0014498149_0"/></Link></div>
					<ul className="home-small">
						<li><Link to={`users/${this.props.homeAlbums[8].user_id}`}><img src="https://f4.bcbits.com/img/0014498598_170.jpg"/></Link></li>
						<li><Link to={`users/${this.props.homeAlbums[7].user_id}`}><img src="https://f4.bcbits.com/img/0014497570_170.jpg"/></Link></li>
						<li><Link to={`users/${this.props.homeAlbums[9].user_id}`}><img src="https://f4.bcbits.com/img/0014504111_170.jpg"/></Link></li>
					</ul>
				</div> : "" }
				<div class="featured-albums-divider">
					<h3>NEW AND NOTABLE ALBUMS</h3>
				</div>
				<div className="featured-albums">
					{this.props.homeAlbums.length > 5 ?
					this.props.homeAlbums.slice(2, 7).map((album, idx) => {
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
								{`by ${album.artist}`}
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