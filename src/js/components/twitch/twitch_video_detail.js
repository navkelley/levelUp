import React from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

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
    <Element name="videoPlayer">
    <div className="video-detail">
      <iframe src={url} alt="twitch player" allowFullScreen="true" />
      <div className="details">
        <p className="streamer">
          <strong>Streamer: </strong>
           {stream.channel.display_name}
        </p>
      </div>
    </div>
    </Element>
  );
};

export default TwitchVideoDetail;
