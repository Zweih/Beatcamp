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
    if(this.props.currentUser) {
     	return <Redirect to="/"/>;
    }

    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h3>{this.props.formType}</h3>
          {this.renderErrors()}
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="session-input"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="session-input"
            />
          </label>
          <input type="submit" value={this.props.formType}/>
        </form>
        {this.props.navLink}
        <button onClick={this.props.demo}>Demo User</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);