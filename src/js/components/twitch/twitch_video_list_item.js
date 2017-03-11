import React from 'react';

const TwitchVideoListItem = ({ stream, onStreamSelect }) => {
  const preview = stream.preview.medium;
  return (
    <tr>
      <td onClick={() => onStreamSelect(stream)} className='list-group-item'>
        <img alt="game stream" className='media-object' src={preview} />
        <span className='media-heading'>{stream.channel.display_name}</span>
      </td>
    </tr>
  );
};

export default TwitchVideoListItem;
