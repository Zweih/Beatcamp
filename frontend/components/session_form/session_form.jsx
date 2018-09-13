import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(element) {
    element.preventDefault();
    const user = Object.assign({}, this.state)
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

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.formType}</h3>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <input type="submit" value="Go!"/>
        </form>
        {this.props.navLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);