import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { isEmail } from 'validator';
import { notify } from 'react-notify-toast';

import ErrorMessage from '../components/Errors';

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      showUsernameError: false,
      showPasswordError: false,
      showEmailError: false,
      disabled: true,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.showPasswordError === true) {
      return this.state.showPasswordError;
    }
    return axios.post('/api/register', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      console.log(res.data.user._id);
      notify.show('Registration Successful! You can now save videos or streams!', 'success', 5000);
    })
    .catch(err => {
      notify.show(`Oops! ${err.response.data.error} Please use a different one.`, 'error', 5000);
    });
  }

  usernameChange(e) {
    this.setState({ username: e.target.value });
    if (this.state.username.length < 4) {
      return this.setState({ showUsernameError: true }); 
    }
    return this.setState({ showUsernameError: false });
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
    if (!isEmail(this.state.email)) {
      return this.setState({ showEmailError: true });
    } 
    return this.setState({ showEmailError: false });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  verifyPassword(e) {
    if (this.state.password !== e.target.value) {
      this.setState({ showPasswordError: true, disabled: true });
      return this.state.showPasswordError;
    }
    this.setState({ showPasswordError: false, disabled: false });
    return this.state.showPasswordError;
  }

  render() {
    return (
      <div>
        <form id="sign-up-form" onSubmit={this.onFormSubmit}>
          <div className="sign-up-group">
            <label htmlFor="username" />
            <input 
              type="text"
              placeholder="Username" 
              id="username" 
              onChange={this.usernameChange} 
              required 
            />
            { this.state.showUsernameError ? 
              <ErrorMessage message='Username is too short!' /> : null }
          </div>
          <div className="sign-up-group">
            <label htmlFor="email" />
            <input 
              type="email" 
              placeholder="Email Address" 
              id="userEmail" 
              onChange={this.emailChange} 
              required 
            />
            { this.state.showEmailError ? 
              <ErrorMessage message='Please enter a valid email.' /> : null }
          </div>
          <div className="sign-up-group">
            <label htmlFor="password" />
            <input 
              type="password" 
              id="password" 
              placeholder="Password" 
              onChange={this.passwordChange} 
              required 
            />
            { this.state.showPasswordError ? <ErrorMessage message='Passwords do not match' /> : null }
          </div>
          <div className="sign-up-group">
            <label htmlFor="verifyPassword" />
            <input 
              type="password" 
              id="verifyPassword" 
              placeholder="Re-type Password" 
              onChange={this.verifyPassword}
              required 
            />
            { this.state.showPasswordError ? <ErrorMessage message='Passwords do not match' /> : null }
          </div>
          <div className="sign-up-group">
            <button 
              type="submit" id="signup-btn" disabled={this.state.disabled}>Sign Up</button>
          </div>
        </form>
        <p>Already have an account?&nbsp;<Link to='/login'>Login</Link></p>
      </div>
    );
  }
}
