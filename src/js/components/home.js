import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

// take out signup until ready import SignUpForm from '../containers/SignUp';
// import { signupUser } from '../actions/auth';

import ContactForm from '../containers/contact_form';
import { signupContact } from '../actions/auth';

class Home extends Component {
  render() {
    return (
      <div className="home wrapper">
        <header className="header-img">
          <img src="http://i.imgur.com/4hvwDzl.jpg" alt="level-up logo" />
        </header>
        <div className="welcome">
          <div className="info-text min-box">
            <p>Designed for all levels of gamers. Learn, strategize and find those Kodama's!
              Preview your next game now! Choose your path: search just YouTube, just Twitch,
              or by Dragon Punch! (both).</p>
            <img src={'http://i.imgur.com/6V5PqZ1.png'} alt="Nioh Game Kodama" />
          </div>
          <div className="sign-up">
            <p>We are always working on adding new features! If you want to receive updates
              when new features are added, feel free to enter your email below. If you have
              any comments or recommendations, please contact us using one of the social 
              options below!
            </p>
            <ContactForm signupContact={this.props.signupContact} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(undefined, { signupContact })(Home);
