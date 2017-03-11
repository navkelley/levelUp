import React, { Component } from 'react';
import { connect } from 'react-redux';

import YouTubeVideoListItem from '../components/youtube/youtube_video_list_item';
import TwitchVideoListItem from '../components/twitch/twitch_video_list_item';

class DragonPunchList extends Component {
	render() {
		return (
			<div id='dragon-search'>
				<table>
					<thead>
						<tr>
							<th>YouTube</th>
							<th>Twitch</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
							{this.props.videos.map((video) => {
								return (
									<YouTubeVideoListItem
										onVideoSelect={this.props.onVideoSelect}
										video={video}
									/>
								);
							})}
							</td>
							<td>
								{this.props.streams.map((stream) => {
									return (
										<TwitchVideoListItem
											onStreamSelect={this.props.onStreamSelect}
											stream={stream}
										/>
									);
								})}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps({ videos, streams }) {
	//when have key:value that are ident can reduce to just one
	return { videos, streams };
}

export default connect(mapStateToProps)(DragonPunchList);
