import React, { Component } from 'react';
import { connect } from 'react-redux';

import YouTubeVideoListItem from '../components/youtube/youtube_video_list_item';
import TwitchVideoListItem from '../components/twitch/twitch_video_list_item';

//map out videos to create list
class DragonPunchList extends Component {
	render() {
		return (
			<div className="table-wrapper">
				<table>
					<tbody>
						<tr>
							<h3 className="table-title">YouTube</h3>
							{this.props.videos.map((video) => {
								return (
									<YouTubeVideoListItem
										onVideoSelect={this.props.onVideoSelect}
										video={video}
									/>
								);
							})}
						</tr>
						<tr>
							<h3 className="table-title">Twitch</h3>
							{this.props.streams.map((stream) => {
								return (
									<TwitchVideoListItem
										onStreamSelect={this.props.onStreamSelect}
										stream={stream}
									/>
								);
							})}
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
