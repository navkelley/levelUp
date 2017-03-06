import React from 'react';
import { Link } from 'react-router';

const MainLayout = () => {
  return (
    <div id="navbar" className="light-fade">
      <div className="wrapper">
        <nav className="clearfix">
          <Link to="/">Home</Link>
          <Link to='#'>YouTube</Link>
          <Link to='#'>Twitch</Link>
          <Link to='#'>Give me the Dragon Punch!</Link>
          <Link className="menu-icon">&#9776;</Link>
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
