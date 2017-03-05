import React from 'react';

const TwitchVideoDetail = ({ stream }) => {
  if (!stream) {
    return <div><iframe src="//giphy.com/embed/l1IY5CmYbirEsXWPm" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/nintendo-mario-switch-l1IY5CmYbirEsXWPm"></a>Click on a Twitch Stream to view it(via GIPHY).</p></div>;
  }
  const { name } = stream.channel;
  const url = `http://player.twitch.tv/?channel=${name}`;

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
