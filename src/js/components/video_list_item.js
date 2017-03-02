import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	return (
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media row'>
				<div className='media-left col-3'>
					<img alt="video" className='media-object' /*src=*/ />
				</div>
				<div className='media-body col-3'>
					<div className='media-heading'>Title</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
