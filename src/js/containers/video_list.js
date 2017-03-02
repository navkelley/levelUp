import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../components/video_list_item';

class VideoList extends Component {
	renderVideo(videoData) {
		//think need loop to go through each video
		for (let [videoData: items] of Object.entries(videoData.items.map(items => videoData.items.snippet))) {
			console.log(videoData: items);
		}

		return (
			<VideoListItem
				key={videoData.items[1].etag}

			/>
		);
	}

	render() {
		return (
			<table className="video-table">
				<tbody>
					{this.props.videos.map(this.renderVideo)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ videos }) {
  //when have key:value that are ident can reduce to just one
  return { videos };
}

export default connect(mapStateToProps)(VideoList);
