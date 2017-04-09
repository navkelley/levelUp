import React from 'react';

const truncateText = (text) => {
	if (text.length < 12) {
		return text; 
	}
	return text.substring(0, 12) + '...';
};

//set props as stream: stream, and onStreamSelect: onStreamSelect --shorthand is below
const TwitchVideoListItem = ({ stream, onStreamSelect }) => {
  const preview = stream.preview.medium;
  return (
    <td onClick={() => onStreamSelect(stream)} className="list-group-item twitch-media">
      <img alt="game stream" className="media-object" src={preview} />
      <p>Streamer:</p>
      <p>{truncateText(stream.channel.display_name)}</p>
    </td>
  );
};

export default TwitchVideoListItem;
