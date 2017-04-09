//main-layout will hold navbar, social links, and address 
import React from 'react';
import Notifications from 'react-notify-toast';

import NavContainer from './nav_bar';

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <NavContainer />
      <Notifications />
        {props.children}
      <footer className="light-fade-bottom">
        <div className="foot-content">
          <div className="social">
            <a href="https://twitter.com/navkelley" target="blank" className="twit" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/nicolevkelley" target="blank" className="linkedIn" title="LinkedIn"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
            <a href="https://github.com/navkelley" target="blank" className="github" title="GitHub"><i className="fa fa-github" aria-hidden="true" /></a>
          </div>
          <address>Designed and built by Nicole V. Kelley</address>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
