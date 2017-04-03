//main-layout will hold navbar, social links, and address 
import React, { Component } from 'react';
import Notifications from 'react-notify-toast';

import NavContainer from './nav_bar';

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-layout">
        <NavContainer />
        <Notifications />
        <div id="layout">
          {this.props.children}
        </div>
        <div className="footer-wrapper light-fade">
          <footer>
            <address className="devAddress">Designed and built by Nicole V. Kelley</address>
            <div id="social">
              <a href="https://twitter.com/navkelley" target="blank" className="twit" title="Twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/nicolevkelley" target="blank" className="linkedIn" title="LinkedIn"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" /></a>
              <a href="https://github.com/navkelley" target="blank" className="github" title="GitHub"><i className="fa fa-github fa-2x" aria-hidden="true" /></a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainLayout;
