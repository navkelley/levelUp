import React from 'react';

import SignUp from '../containers/SignUp';
import Login from '../containers/Login';

const Account = () => {
  return (
    <section className="userAccount">
      <header className="header-img" />
      <div className="welcome">
        <div className="login-sign">
          <p id="signup-guest">Sign up or login to save your favorite videos or streamer channel to watch at a later time!</p>
          <SignUp />
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Account;
