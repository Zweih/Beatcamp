import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class UserProfileEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.currentUser.username,
			password: "",
			avatar_url: "",
			bio: "",
			location: "",
			id: this.props.currentUser.id,
			disabled: false,
			success: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(element) {
		element.preventDefault();
		this.props.clearSessionErrors();
		this.setState({disabled: true});
		const user = {};

		Object.keys(this.state).forEach((key) => {
			user[key] = this.state[key].length > 0 ? this.state[key] : this.props.currentUser[key]; 
		});

		this.props.processForm(user);
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
		this.props.clearSessionErrors();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors.length < 1 && this.state.disabled) {
			this.setState({ success: true });
		}
	}
	
	render() {
		if(this.state.success) {
			return (
				<Redirect to={`/users/${this.props.currentUser.id}`}/>
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
							New avatar URL
						</label>
						<input
							type="text"
							value={this.state.avatar_url}
							onChange={this.update("avatar_url")}
							className={`session-input, ${this.props.formClass}-input`}
						/>
					</div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							New bio
						</label>
						<input
							type="textarea"
							value={this.state.bio}
							placeholder={this.props.currentUser.bio}
							onChange={this.update("bio")}
							className={`session-input ${this.props.formClass}-input`}
						/>
					</div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							New location
						</label>
						<input
							type="text"
							value={this.state.location}
							placeholder={this.props.currentUser.location}
							onChange={this.update("location")}
							className={`session-input, ${this.props.formClass}-input`}
						/>
					</div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							Confirm password
						</label>
						<input
							type="password"
							value={this.state.password}
							required
							onChange={this.update("password")}
							className={`session-input, ${this.props.formClass}-input`}
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

export default withRouter(UserProfileEdit);