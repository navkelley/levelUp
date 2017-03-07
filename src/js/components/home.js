import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <h1 className="logo">Level Up</h1>
      <div className="links">
        <button>
          <Link to="/search/youtube" className="btn1 home-links">YouTube</Link>
        </button>
        <button>
          <Link to="/search/twitch" className="btn2 home-links">Twitch</Link>
        </button>
        <button>
          <Link to="/search" className="btn3 home-links">Dragon Punch!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
