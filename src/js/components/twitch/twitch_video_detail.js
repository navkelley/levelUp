import React from 'react';

const TwitchVideoDetail = ({ stream }) => {
  //const url = stream.channel.url;

  return (
    <div className='video-detail col-6'>
      <div className='embed'>
        <iframe
          className='embed-item'
          src="https://www.twitch.tv/kingoflightninggaming"
          height='720'
          width='1280'
          frameborder='0'
          scrolling='no'
          allowfullscreen='false'
        />
      </div>
      <div className='details'>
        <div><strong>Streamer:</strong> {stream.channel.name}</div>
        <div><strong>Status:</strong> {stream.channel.status}</div>
      </div>
    </div>
  );
};

export default TwitchVideoDetail;
