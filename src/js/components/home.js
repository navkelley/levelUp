import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <header className="home-img header-img">
        <img id="app-logo" src={'http://i.imgur.com/jspyWnl.png?1'} alt="Level Up Logo" />
      </header>
      <div className="welcome">
        <p id="for-all" className="col-1">Designed for all levels of gamers.</p>
        <p id="learn-preview" className="col-1">Learn, strategize and find those Kodama's! Or preview your next game.</p>
        <p id="choose-path" className="col-1">Choose your path, search just YouTube,
          just Twitch, or by Dragon Punch! (both).</p>
          <p id="signup-guest" className="col-1">Sign up to save your favorite videos or streamer channel to watch at a later time
          or browse now as a guest!</p>
      </div>
    </section>
  );
};

export default Home;
