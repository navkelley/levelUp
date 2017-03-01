import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>You have not conducted a search yet, type the name of your favorite game in the search box to get started.</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detail col-6'>
			<div className='embed'>
				<iframe className='embed-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div><strong>Title:</strong> {video.snippet.title}</div>
				<div><strong>Description:</strong> {video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
