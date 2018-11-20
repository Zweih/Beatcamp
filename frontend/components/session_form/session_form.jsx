import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			disabled: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	handleSubmit(element) {
		element.preventDefault();
		this.setState({disabled: true});
		const user = Object.assign({}, this.state)
		this.props.processForm(user);
	}

	handleDemo(element) {
		element.preventDefault();
		this.setState({disabled: true})
		this.props.demo();
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
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	componentDidMount() {
		this.props.clearSessionErrors();
	}

	render() {
		return (
			<div className={`session-form, ${this.props.formClass}`}>
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<h3 className={`${this.props.formClass}-title`}>{this.props.formType}</h3>
					{this.renderErrors()}
					<div className={`${this.props.formClass}-divider`}></div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							Username / email
						</label>
						<input
							type="text"
							value={this.state.username}
							required
							onChange={this.update("username")}
							className={`${this.props.formClass}-input`}
						/>
					</div>
					<div className={`${this.props.formClass}-item`}>
						<label className={`${this.props.formClass}-label`}>
							Password
						</label>
						<input
							type="password"
							value={this.state.password}
							required
							onChange={this.update("password")}
							className={`${this.props.formClass}-input`}
						/>
					</div>
					<div className={`${this.props.formClass}-buttons`}>
						<input type="submit"
							value={this.props.formType}
							className={`button`}
							disabled={this.state.disabled}
							/>
						<button 
							onClick={this.handleDemo}
							className={`button`}
						>
							Demo User
						</button>
					</div>
					<p className="login-other-link">
						{this.props.linkText} have an account? {this.props.navLink}.</p>
				</form>
			</div>
		);
	}
}

export default withRouter(SessionForm);