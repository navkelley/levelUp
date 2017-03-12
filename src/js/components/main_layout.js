/**
  * comments to go here
  **/
import React, { Component } from 'react';
import { Link } from 'react-router';
import { DropDown, DropDownTrigger, DropDownContent } from 'react-simple-dropdown';

import NavContainer from './nav_bar';

//turn to class component with state--use conditional or ?
export default class MainLayout extends Component {
  constructor() {
    super();

    this.state = {
      isNavbarShow: false
    };
  }
//first need icon to show
//need to toggle state from false to true

  openMobileNav() {
    this.setState({ isNavbarShow: !this.state.isNavbarShow });
    //add dropdown to bars for mobile menu
  }

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
