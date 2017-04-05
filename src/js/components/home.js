import React, { Component } from 'react';
import { Link } from 'react-router';
//import axios from 'axios';
//import { notify } from 'react-notify-toast';
import { connect } from 'react-redux';

import SignUpForm from '../containers/SignUp';
import { signupUser } from '../actions/auth';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <header className="home-img header-img">
          <img id="app-logo" src={'http://i.imgur.com/jspyWnl.png?2'} alt="Level Up Logo" />
        </header>
        <div className="welcome">
          <div className="info-card-1 clearfix">
            <div className="col-1 info-text">
              <p id="for-all">Designed for all levels of gamers. Learn, strategize and find those Kodama's!
                Or preview your next game.</p>
              <p id="choose-path">Choose your path: search just YouTube,
                just Twitch, or by Dragon Punch! (both).</p>
              </div>
            <img id="kodama" className="col-1" src={'http://i.imgur.com/6V5PqZ1.png'} alt="Nioh Game Kodama" />
          </div>
          <div className="sign-up">
            <p id="signup-guest">Sign up to save your favorite videos or streamer channel to watch at a later time
              or browse now as a guest!</p>
            <SignUpForm signupUser={this.props.signupUser} />
            <p>Already have an account?&nbsp;<Link to='/login'>Login</Link></p>
          </div>
        </div>
      </section>
    );
  }
};

export default connect(undefined, { signupUser })(Home);
