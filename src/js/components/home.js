import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

//take out signup until ready
//import SignUpForm from '../containers/SignUp';
//import { signupUser } from '../actions/auth';

import ContactForm from '../containers/contact_form';
import { signupContact } from '../actions/auth';

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
            <p id="signup-guest">We are working to add new features. 
              Soon you will be able to register for an account to save 
              your favorite videos or streamer channel to watch at a later time.
              You are welcome to sign up to be contacted when these features are added!
            </p>
            <ContactForm signupContact={this.props.signupContact} />
            <p>Thank you for your interest!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(undefined, { signupContact })(Home);
