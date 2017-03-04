import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoListItem from '../components/video_list_item';

class VideoList extends Component {

	render() {
		return (
			<div>
				<table className="video-table">
					<tbody>
						{this.props.videos.map((video) => {
				return (
					<VideoListItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.etag} />
				);
			})}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps({ videos }) {
  //when have key:value that are ident can reduce to just one
  return { videos };
}

export default connect(mapStateToProps)(VideoList);
