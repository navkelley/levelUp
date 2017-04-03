import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { isEmail } from 'validator';
import { notify } from 'react-notify-toast';

import ErrorMessage from '../components/Errors';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            showEmailError: false,
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
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

    render() {
        return (
            <div>
                <form id="login-form" onSubmit={this.onFormSubmit}>
                    <div className="login-group">
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
                    <div className="login-group">
                        <label htmlFor="password" />
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Password" 
                                onChange={this.passwordChange} 
                                required 
                            />
                    </div>
                    <div className="login-group">
                        <button type="submit" id="login-btn">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}
