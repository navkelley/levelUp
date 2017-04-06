import React from 'react';
import { Field, reduxForm } from 'redux-form';

//take out for temp
//const { handleSubmit, signupUser, submitting } = props;

const SignUpForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <div>
      <form id="sign-up-form" onSubmit={handleSubmit}>
        <div className="sign-up-group">
          <label htmlFor="username" />
          <Field 
            name="username"
            component="input"
            type="text"
            placeholder="Username"  
          />
        </div>
        <div className="sign-up-group">
          <label htmlFor="email" />
          <Field 
            name="email"
            component="input"
            type="email" 
            placeholder="Email Address" 
          />
        </div>
        <div className="sign-up-group">
          <label htmlFor="password" />
          <Field 
            name="password"
            component="input"
            type="password" 
            placeholder="Password"
          />
        </div>
        <div className="sign-up-group">
          <label htmlFor="verifyPassword" />
          <Field 
            name="verifyPassword"
            component="input"
            type="password" 
            placeholder="Re-type Password"
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
}

export default reduxForm({ form: 'signup' })(SignUpForm);
