import React from 'react';

const TwitchVideoDetail = ({ stream }) => {
  if (!stream) {
    return <i className="fa fa-gamepad fa-3x twitch-gamepad" aria-hidden="true"></i>;
  }
  const { name } = stream.channel;
  const url = `https://player.twitch.tv/?channel=${name}`;

  return (
    <div className='video-detail col-6'>
      <div className='embed'>
        <iframe
          className='embed-item'
          src={url}
          height='720'
          width='1280'
        />
      </div>
    </div>
  );
};

export default TwitchVideoDetail;
