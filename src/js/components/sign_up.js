import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form id="sign-up">
        <div className="sign-up-group">
          <label for="username">Username</label>
          <input type="text" placeholder="nicolek234" id="username" />
        </div>
        <div className="sign-up-group">
          <label for="email">Email</label>
          <input type="email" placeholder="bobtest@levelup.com" id="userEmail" />
        </div>
        <div className="sign-up-group">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="sign-up-group">
          <label for="verifyPassword">Verify Password</label>
          <input type="password" id="verifyPassword" />
        </div>
        <div className="sign-up-group">
          <button type="submit" id="submitSignup">Sign Up</button>
        </div>
      </form>
    );
  }
}
