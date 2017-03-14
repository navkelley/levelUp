import React from 'react';

const YouTubeVideoDetail = ({ video }) => {
	if (!video) {
		return (
			<p className="funFact">Fun Fact: Pac-Man was invented by the designer Toru Iwatani while he was eating pizza. -Courtesy of 
      		<a className="funFact" target="blank" href="https://www.technotification.com/2015/01/15-interesting-video-game-facts.html"> Technotification</a></p>
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
				<p className="description"><strong>Title:</strong> {video.snippet.title}</p>
				<p className="description"><strong>Description:</strong> {video.snippet.description}</p>
			</div>
		</div>
	);
};

export default YouTubeVideoDetail;
