import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoListItem from '../components/video_list_item';

class VideoList extends Component {

	renderVideo(videoData) {

		return (
			<VideoListItem
				key={etag}

			/>
		);
	}

	render() {
		return (
			<table className="video-table">
				<tbody>
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ videos }) {
	console.log("mapping:", videos);
  //when have key:value that are ident can reduce to just one
  return { videos };
}

export default connect(mapStateToProps)(VideoList);
