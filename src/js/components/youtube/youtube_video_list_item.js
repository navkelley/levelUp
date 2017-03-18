import React from 'react';

function truncateText(text) {
	if (text.length < 25) {
		return text; 
	}
	return text.substring(0, 25) + "...";
}

const YouTubeVideoListItem = ({ video, onVideoSelect }) => {
	const { url } = video.snippet.thumbnails.high;
	return (
		<td onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='youtube-media-row'>
				<img alt="video" className='media-object' src={url} />
				<span className="view">{truncateText(video.snippet.title)}</span>
			</div>
		</td>
	);
};

export default YouTubeVideoListItem;

