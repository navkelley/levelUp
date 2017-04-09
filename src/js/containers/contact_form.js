import React from 'react';
import { Field, reduxForm } from 'redux-form';

//using redux form to hold data for entire application

const ContactForm = (props) => {
    const { handleSubmit, signupContact, submitting } = props;
    return (
        <div className="form">
            <p>Thank you for your interest!</p>
            <form id="sign-up-form" onSubmit={handleSubmit(signupContact)}>
                <div className="sign-up-group">
                <label htmlFor="name" />
                <Field 
                    name="name"
                    component="input"
                    type="text"
                    placeholder=" Name"  
                />
                </div>
                <div className="sign-up-group">
                <label htmlFor="email" />
                <Field 
                    name="email"
                    component="input"
                    type="email" 
                    placeholder=" Email Address" 
                />
                </div>
                <div className="sign-up-group">
                    <button type="submit" id="signup-btn" disabled={submitting}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({ form: 'contact' })(ContactForm);
