import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class UserAlbumEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cover_url: "",
			description: "",
			disabled: false,
			success: false,
			unauthorized: false,
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

		console.log("album", album);
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

		return (
			<div className={`session-form, ${this.props.formClass}`}>
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<h3 className={`${this.props.formClass}-title`}>{this.props.formType}</h3>
					{this.renderErrors()}
					<div className={`${this.props.formClass}-divider`}></div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							New cover URL
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
						<input
							type="textarea"
							value={this.state.description}
							placeholder={this.props.userAlbum.edit}
							onChange={this.update("description")}
							className={`${this.props.formClass}-input`}
						/>
					</div>
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