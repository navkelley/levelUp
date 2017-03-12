import React from 'react';

const TwitchVideoDetail = ({ stream }) => {
  if (!stream) {
    return (
      <p>Search Twitch by entering a game then click a video to play.</p>
    )
  }
  const { name } = stream.channel;
  const url = `https://player.twitch.tv/?channel=${name}`;

  return (
    <div className='video-detail col-6'>
      <div className='embed'>
        <iframe className='embed-item' src={url} />
      </div>
    </div>
  );
};

export default TwitchVideoDetail;
