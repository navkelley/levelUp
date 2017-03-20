import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form id="sign-up">
        <div className="sign-up-group">
          <label for="username" />
          <input type="text" placeholder="Username" id="username" />
        </div>
        <div className="sign-up-group">
          <label for="email" />
          <input type="email" placeholder="Email Address" id="userEmail" />
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
