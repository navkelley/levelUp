import React from 'react';

const TwitchVideoDetail = ({ stream }) => {
  if (!stream) {
    return (
      <p className="funFact">Fun Fact: The highest grossing game of all time is actually World of WarCraft bringing in whopping ten billion dollars over its lifetime. -Courtesy of 
      <a className="funFact" target="blank" href="https://www.technotification.com/2015/01/15-interesting-video-game-facts.html"> Technotification</a></p>
    )
  }
  const { name } = stream.channel;
  const url = `https://player.twitch.tv/?channel=${name}`;

  return (
    <div className="embed">
      <iframe className="embed-item" src={url} />
    </div>
  );
};

export default TwitchVideoDetail;
