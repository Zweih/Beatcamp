import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import merge from "lodash/merge";

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
    this.props.processForm(merge({}, this.state));
  }

  update(field) {
    return (element) => this.setState({
          [field]: element.target.value,
    });
  }

  render() {
    if(this.props.currentUser) {
       return <Redirect to="/"/>;
    }

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