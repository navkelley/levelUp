import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoListItem from '../components/twitch/twitch_video_list_item';
//map out streams to each data cell in table 
class TwitchVideoList extends Component {
	render() {
		return (
			<div className="table-wrapper">
				<table id="twitch-streams">
					<tbody>
						{this.props.streams.map((stream) => {
							return (
								<TwitchVideoListItem
									onStreamSelect={this.props.onStreamSelect}
									stream={stream}
									key={stream._id}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

//allow stream data to be used 
function mapStateToProps({ streams }) {
	//when have key:value that are ident can reduce to just one
	return { streams };
}

export default connect(mapStateToProps)(TwitchVideoList);
