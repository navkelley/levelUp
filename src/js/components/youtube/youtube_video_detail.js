import React from 'react';
//set props as video: video--shorthand below
const YouTubeVideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="funFact">
        <p>Fun Fact: Pac-Man was invented by the designer Toru 
          Iwatani while he was eating pizza. 
          <a target="blank" href="https://www.technotification.com/2015/01/15-interesting-video-game-facts.html">
            -Technotification</a>
        </p>
      </div>
    );  
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="video-detail">
      <iframe src={url} alt="youtube player" />
      <div className="details">
        <p className="description"><strong>Title:</strong> {video.snippet.title}</p>
        <p className="description"><strong>Description:</strong> {video.snippet.description}</p>
      </div>
    </div>
  );
};

export default YouTubeVideoDetail;
