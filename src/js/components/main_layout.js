/**
  * main-layout will hold navbar, social links, and address 
  **/
import React, { Component } from 'react';

import NavContainer from './nav_bar';

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <NavContainer />
      <div id="layout">
        {props.children}
      </div>
      <div id="devAddress">
        <address><i className="fa fa-gamepad" aria-hidden="true" /> Designed and built by Nicole V. Kelley <i className="fa fa-gamepad" aria-hidden="true" /></address>
        <div id="social">
          <a href="https://twitter.com/navkelley" target="blank" className="twit" title="Twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true" /></a>
          <a href="www.linkedin.com/in/nicolevkelley" target="blank" className="linkedIn" title="LinkedIn"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" /></a>
          <a href="https://github.com/navkelley" target="blank" className="github" title="GitHub"><i className="fa fa-github fa-2x" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
