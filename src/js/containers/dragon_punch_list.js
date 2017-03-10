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
						{this.props.videos.map((video) => {
							return (
								<tr key={video.etag}>
									<YouTubeVideoListItem 
										onVideoSelect={this.props.onVideoSelect}
										video={video}
									/>
									<TwitchVideoListItem 
										onStreamSelect={this.props.onStreamSelect}
										stream={stream}
									/>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
