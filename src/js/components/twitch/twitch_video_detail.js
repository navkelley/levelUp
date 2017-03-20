import React from 'react';

const TwitchVideoDetail = ({ stream }) => {
  //edge case for no selected stream
  if (!stream) {
    return (
      <div className="funFact">
        <p>Fun Fact: The highest grossing game of all time is actually World of WarCraft bringing in whopping ten billion 
          dollars over its lifetime.
          <a target="blank" href="https://www.technotification.com/2015/01/15-interesting-video-game-facts.html"> 
            -Technotification
          </a>
        </p>
      </div>
    );
  }
  //in {} makes end property variable as well 
  const { name } = stream.channel;
  const url = `https://player.twitch.tv/?channel=${name}`;

  return (
    <div className="embed">
      <iframe className="embed-item" src={url} />
    </div>
  );
};

export default TwitchVideoDetail;
