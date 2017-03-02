import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../components/video_list_item';

class VideoList extends Component {

	render() {
		return (
			<VideoListItem />
				//onVideoSelect={props.onVideoSelect}
				//key={videos.id.videoId}
				//video={videos}
		);
	}
}

export default VideoList;
