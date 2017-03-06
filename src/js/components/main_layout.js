import React from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';

import Home from './home';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div id="navbar">
        <div className="wrapper">
          <nav>
            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
            <Link to='#'><i className="fa fa-youtube" aria-hidden="true"></i></Link>
            <Link to='#'><i className="fa fa-twitch" aria-hidden="true"></i></Link>
            <Link to='#'>Give me the Dragon Punch!</Link>
          </nav>
        </div>
      </div>
      <div className="main">
        <div id="social">
          <Link to="#" className="twit" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
          <Link to="#" className="fbook" title="Facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
          <Link to="#" className="gplus" title="Google Plus"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
        </div>
        <section>
          <Home />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
