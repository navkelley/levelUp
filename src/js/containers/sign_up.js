import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.username.length === 0) {
      return alert("username is required");
    }
    axios.post("/api/register", {
      username: this.state.username
    })
    .then(res => console.log(res))
    .catch( err => console.log(err.response.status));
  }

  usernameChange(e) {
    this.setState({ username: e.target.value });
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
    //find way to add email validation 
  }

  render() {
    return (
      <form id="sign-up" onSubmit={this.onFormSubmit}>
        <div className="sign-up-group">
          <label for="username" />
          <input type="text" placeholder="Username" id="username" onChange={this.usernameChange} />
        </div>
        <div className="sign-up-group">
          <label for="email" />
          <input type="email" placeholder="Email Address" id="userEmail" onChange={this.emailChange} />
        </div>
        <div className="sign-up-group">
          <label for="password" />
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="sign-up-group">
          <label for="verifyPassword" />
          <input type="password" id="verifyPassword" placeholder="Re-type Password" />
        </div>
        <div className="sign-up-group">
          <button type="submit" id="signup-btn">Sign Up</button>
        </div>
      </form>
    );
  }
}
