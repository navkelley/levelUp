import React, { Component } from 'react';
import { connect } from 'react-redux';

import YouTubeVideoListItem from '../components/youtube/youtube_video_list_item';

class YouTubeVideoList extends Component {

	render() {
		return (
			<div id="ytVideo-table">
				<table>
					<thead>
						<tr>
							<th>YouTube</th>
						</tr>
					</thead>
					<tbody>
						{this.props.videos.map((video) => {
							return (
								<tr key={video.etag}>
									<YouTubeVideoListItem
										onVideoSelect={this.props.onVideoSelect}
										video={video}
									/>
								</tr>
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

export default connect(mapStateToProps)(YouTubeVideoList);
