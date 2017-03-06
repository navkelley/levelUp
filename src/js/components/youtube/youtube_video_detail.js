import React from 'react';

const YouTubeVideoDetail = ({ video }) => {
	if (!video) {
		return <i className="fa fa-gamepad fa-3x youTube-gamepad" aria-hidden="true"></i>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

	return (
		<div className='video-detail'>
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

export default YouTubeVideoDetail;
