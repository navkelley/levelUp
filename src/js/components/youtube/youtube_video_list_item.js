import React from 'react';

const YouTubeVideoListItem = ({ video, onVideoSelect }) => {
	const { url } = video.snippet.thumbnails.default;
	return (
		<td onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='youtube-media-row'>
				<div className='media-left'>
					<img alt="video" className='media-object' src={url} />
				</div>
				<div className='media-body col-3'>
					<div className='media-heading'>{video.snippet.title}</div>
				</div>
			</div>
		</td>
	);
};

export default YouTubeVideoListItem;

