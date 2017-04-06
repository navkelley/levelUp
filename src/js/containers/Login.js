import React, { Component } from 'react';
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
        return axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log(res.data.user.id);
            notify.show('Login successful!', 'success', 5000);
            this.setState({ email: '', password: '', showEmailError: false });
            this.refs.form.reset();
        })
        .catch(err => {
            notify.show(`Oops! ${err}`, 'error', 5000);
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
                <form id="login-form" ref="form" onSubmit={this.onFormSubmit}>
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
