import React from "react";
import { withRouter } from "react-router-dom";

class UserProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      avatar_url: "",
      bio: "",
      location: "",
      userId: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(element) {
    element.preventDefault();
    const user = Object.assign({}, this.props.currentUser, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (element) => this.setState({
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
              className={`session-input, ${this.props.formClass}-input`}
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
              onChange={this.update("password")}
              className={`session-input, ${this.props.formClass}-input`}
            />
          </div>
          <div className={`${this.props.formClass}-buttons`}>
            <input type="submit"
              value={this.props.formType}
              className={`${this.props.formClass}-button`}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UserProfileEdit);