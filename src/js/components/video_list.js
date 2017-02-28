import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.id.videoId}
				video={video}
			/>
		);
	});

	return (
		<ul className='list-group col-6'>
			{videoItems}
		</ul>
	);
};

export default VideoList;
