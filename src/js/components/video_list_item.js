import React from 'react';

const VideoListItem = ({video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<tr>
			<td onClick={() => onVideoSelect(video)} className='list-group-item'>
				<div className='video-list media row'>
					<div className='media-left col-3'>
						<img alt="video" className='media-object' src={imageUrl} />
					</div>
					<div className='media-body col-3'>
						<div className='media-heading'>{video.snippet.title}</div>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default VideoListItem;
