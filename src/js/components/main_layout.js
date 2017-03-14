/**
  * main-layout will hold navbar, social links, and address 
  **/
import React, { Component } from 'react';

import NavContainer from './nav_bar';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <NavContainer />
        <div className="social-icons">
          <div id="social">
            <a href="https://twitter.com/navkelley" target="blank" className="twit" title="Twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true" /></a>
            <a href="www.linkedin.com/in/nicolevkelley" target="blank" className="linkedIn" title="LinkedIn"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" /></a>
            <a href="https://github.com/navkelley" target="blank" className="github" title="GitHub"><i className="fa fa-github fa-2x" aria-hidden="true" /></a>
          </div>
        </div>
        <section>
          {this.props.children}
        </section>
        <div id="devAddress">
          <address><i className="fa fa-gamepad" aria-hidden="true" /> Designed and built by Nicole V. Kelley <i className="fa fa-gamepad" aria-hidden="true" /></address>
        </div>
      </div>
    );
  }
}
