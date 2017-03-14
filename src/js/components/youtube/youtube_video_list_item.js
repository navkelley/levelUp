import React from 'react';
//set props as video: video, and onVideoSelect: onVideoSelect --shorthand is below
const YouTubeVideoListItem = ({ video, onVideoSelect }) => {
	const { url } = video.snippet.thumbnails.high;
	return (
		<td onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="youtube-media-row">
				<img alt="video" className="media-object" src={url} />
				<span className="view">{video.snippet.title}</span>
			</div>
		</td>
	);
};

export default YouTubeVideoListItem;
