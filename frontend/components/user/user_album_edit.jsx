import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class UserAlbumEdit extends React.Component {
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

		Object.keys(this.props.userAlbum).forEach((key) => {
			if(this.state[key] && this.state[key].length > 0) {
				album[key] = this.state[key];
			} else {
				album[key] = this.props.userAlbum[key];
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

		const userAlbum = this.props.userAlbum;
		const currentUser = this.props.currentUser;
		const albumUserId = this.props.albumUserId;

		if((userAlbum.userId && userAlbum.userId !== currentUser.id) ||
		(userAlbum.userId && userAlbum.userId !== albumUserId)||
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
							value={this.state.cover_url}
							onChange={this.update("cover_url")}
							className={`${this.props.formClass}-input`}
						/>
					</div>
				</div>
			);
		});

		return (
			<div className={`session-form, ${this.props.formClass}`}>
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<h3 className={`${this.props.formClass}-title`}>{this.props.formType}</h3>
					{this.renderErrors()}
					<div className={`${this.props.formClass}-divider`}></div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							New title
						</label>
						<input
							type="text"
							placeholder={this.props.userAlbum.title}
							value={this.state.title}
							onChange={this.update("title")}
							className={`${this.props.formClass}-input`}
						/>
					</div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							New cover image
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
							New description
						</label>
						<textarea
							value={this.state.description}
							placeholder={this.props.userAlbum.description}
							cols="40"
							rows="10"
							onChange={this.update("description")}
							className={`${this.props.formClass}-input`}
						/>
					</div>
					<h3 className={`${this.props.formClass}-title track-edit-title`}>Album Tracks</h3>
					<div className={`${this.props.formClass}-divider`}></div>
					{tracks}
					<div className={`${this.props.formClass}-buttons`}>
						<input
							type="submit"
							disabled={this.state.disabled}
							value={this.props.formType}
							className={`button`}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(UserAlbumEdit);