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
            <a href="https://twitter.com/navkelley" target="blank" className="twit" title="Twitter"><img src="http://i.imgur.com/wFKLQQm.png" alt="Twiter Icon"/></a>
            <a href="https://www.linkedin.com/in/nicolevkelley" target="blank" className="linkedIn" title="LinkedIn"><img src="http://i.imgur.com/INarVJ7.png" alt="LinkedIn Icon"/></a>
            <a href="https://github.com/navkelley" target="blank" className="github" title="GitHub"><img src="http://i.imgur.com/GM1gYXS.png" alt="Github Icon"/></a>
          </div>
          <address>Designed and built by Nicole V. Kelley</address>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
