import React from 'react';

const TwitchVideoListItem = ({ stream, onStreamSelect }) => {
  const preview = stream.preview.medium;
  return (
    <tr>
      <td onClick={() => onStreamSelect(stream)} className='list-group-item'>
        <div className='twitch-media-row'>
          <div className='media-left col-3'>
            <img alt="game stream" className='media-object' src={preview} />
          </div>
          <div className='media-body col-3'>
            <div className='media-heading'>{stream.channel.display_name}</div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TwitchVideoListItem;
