import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class AlbumEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cover_url: "",
			title: "",
			description: "",
			disabled: false,
			success: false,
			unauthorized: false,
			tracks: null,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(element) {
		element.preventDefault();
		this.props.clearAlbumErrors();
		this.setState({disabled: true});
		const album = {};

		Object.keys(this.props.album).forEach((key) => {
			if(this.state[key] && this.state[key].length > 0) {
				album[key] = this.state[key];
			} else {
				album[key] = this.props.album[key];
			}
		});
		
		this.props.processForm(album, this.props.currentUser);
	}

	update(field) {
		return (element) => this.setState({
			disabled: false,
			[field]: element.target.value,
		});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li className="error" key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	componentDidMount() {
		this.props.fetchAlbum(this.props.albumId);
		this.props.clearAlbumErrors();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors.length < 1 && this.state.disabled) {
			this.setState({ success: true });
		}
	}
	
	render() {
		if(this.state.success) {
			return (
				<Redirect to={`/users/${this.props.albumUserId}/albums/${this.props.albumId}`}/>
			);
		}

		const album = this.props.album;
		const currentUser = this.props.currentUser;
		const albumUserId = this.props.albumUserId;

		if((album.userId && album.userId !== currentUser.id) ||
		(album.userId && album.userId !== albumUserId)||
		albumUserId !== currentUser.id) {
			return (
				<Redirect to={`/`}/>
			);
		}

		const tracks = this.props.albumTracks.map((track, idx) => {
			return (
				<div
					key={"track" + idx}
					className="edit-track-items"
				>
					<h3>Track {idx + 1}</h3>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							Title
						</label>
						<input
							type="text"
							placeholder={track.title}
							className={`${this.props.formClass}-input`}
						/>
					</div>
				</div>
			);
		});
		
		return (
			<div className={`session-form, ${this.props.formClass}`}>
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<div className="album-left">
						<div className="album-info-box">
							<div className="album-small-img">
								{this.state.cover_url.length > 0 ? <img src={this.state.cover_url}/> : <img src={this.props.album.cover_url}/>}
							</div>
							<div className="album-title-artist">
								<p className="album-title">
									{!this.state.title ? this.props.album.title : this.state.title}
								</p>
								<p className="album-artist">
									by <span>{this.props.currentUser.username}</span>
								</p>
							</div>
						</div>
						<div className={`${this.props.formClass}-buttons`}>
							<input
								type="submit"
								disabled={this.state.disabled}
								value={this.props.formType}
								className={`button`}
							/>
						</div>
					</div>
					<div className="album-right">
						<div className={`${this.props.formClass}-info`}>
							<h3 className={`${this.props.formClass}-title`}>{this.props.formType}</h3>
							{this.renderErrors()}
							<h1>Leave field blank to keep the same.</h1>
						</div>
						<div className={`${this.props.formClass}-item`}>
							<label className={`${this.props.formClass}-label`}>
								Title
							</label>
							<input
								type="text"
								placeholder={this.props.album.title}
								value={this.state.title}
								onChange={this.update("title")}
								className={`${this.props.formClass}-input`}
							/>
						</div>
						<div className={`${this.props.formClass}-item`}>
							<label className={`${this.props.formClass}-label`}>
								Cover URL
							</label>
							<input
								type="text"
								value={this.state.cover_url}
								onChange={this.update("cover_url")}
								className={`${this.props.formClass}-input`}
							/>
						</div>
						<div className={`${this.props.formClass}-item`}>
							<label className={`${this.props.formClass}-label`}>
								Description
							</label>
							<textarea
								value={this.state.description}
								placeholder={this.props.album.description}
								cols="40"
								rows="10"
								onChange={this.update("description")}
								className={`${this.props.formClass}-input`}
							/>
						</div>
						{/* <h3 className={`${this.props.formClass}-title track-edit-title`}>Album Tracks</h3>
						TODO: ADD TRACK EDIT CONTAINERS
						<div className={`${this.props.formClass}-divider`}></div> */}
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(AlbumEdit);