import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class AlbumEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cover_url: "",
			title: "",
			description: "",
			id: this.props.albumId,
			disabled: false,
			success: false,
			unauthorized: false,
			tracks: null,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateFile = this.updateFile.bind(this);
	}

	handleSubmit(element) {
		element.preventDefault();
		this.props.clearAlbumErrors();
		this.setState({disabled: true});
		const formData = new FormData();
		const fields = ["title", "description", "id", "cover_url", "cover"];

		fields.forEach((key) => {
			if(this.state[key]) {
				formData.append(`album[${key}]`, this.state[key]);
			}
		});
		
		formData.append("user[id]", this.props.currentUser.id)
		this.props.processForm(formData);
	}

	update(field) {
		return (element) => this.setState({
			disabled: false,
			[field]: element.target.value,
		});
	}

	updateFile(e) {
		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();

		fileReader.onloadend = () =>
			this.setState({ 
				file_url: fileReader.result,
				cover: file,
		});

		if(file) {
			fileReader.readAsDataURL(file);
		}
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

	validURL(str) {
		const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		return pattern.test(str);
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
								<img src={this.state.file_url ? this.state.file_url : (this.validURL(this.state.cover_url) ? this.state.cover_url : this.props.album.cover_url)}/>
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
						<div className={`${this.props.formClass}-item`}>
							<div className={`${this.props.formClass}-item update-album-image`}>
								{this.state.file_url ? <img src={this.state.file_url}/> : <div className="album-image-placeholder">
									<input
										type="file"
										name="file"
										id="file"
										onChange={this.updateFile}
									/>
									<label htmlFor="file">Upload Album Art</label>
									<p className={"update-album-image-hint"}>
										200 x 200 pixels minimum
									</p>
									<p className={"update-album-image-hint"}>
										(bigger is better)
									</p>
								</div>}
							</div>
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