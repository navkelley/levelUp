import React from 'react';

const YouTubeVideoDetail = ({ video }) => {
	if (!video) {
		return (
			<p className="no-search">Search a game then pick a video to play.</p>
		);
		
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

	return (
		<div className='video-detail'>
			<div className='embed'>
				<iframe className='embed-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div><p className="description"><strong>Title:</strong> {video.snippet.title}</p></div>
				<div><p className="description"><strong>Description:</strong> {video.snippet.description}</p></div>
			</div>
		</div>
	);
};

export default YouTubeVideoDetail;
