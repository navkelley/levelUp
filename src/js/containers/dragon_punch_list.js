import React, { Component } from 'react';
import { connect } from 'react-redux';

import YouTubeVideoListItem from '../components/youtube/youtube_video_list_item';
import TwitchVideoListItem from '../components/twitch/twitch_video_list_item';
import YouTubeVideoList from './youtube_video_list';
import TwitchVideoList from './twitch_video_list';

//map out videos to create list
class DragonPunchList extends Component {
  renderResultsTable() {
		return (
      <table id="dragon">
        <tbody>
          <tr id="youtube-row">
            <h3 className="table-title">YouTube</h3>
            {this.props.videos.data.map((video) => {
              return (
                <YouTubeVideoListItem
                  onVideoSelect={this.props.onVideoSelect}
                  video={video}
                />
              );
            })}
          </tr>
          <tr id="twitch-row">
            <h3 className="table-title">Twitch</h3>
            {this.props.streams.data.map((stream) => {
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
		);
	}
	render() {
    if (this.props.videos.isFetched && this.props.streams.isFetched) {
      if (this.props.streams.data.length === 0) {
        return (
          <div className="table-wrapper">
            <p className="no-results">No Twitch results found!</p>
            <YouTubeVideoList />
          </div>
        );
      }
      if (this.props.videos.data.length === 0) {
        return (
          <div className="table-wrapper">
            <p className="no-results">No YouTube results found!</p>
            <TwitchVideoList />
          </div>
        );
      }
      return (
        <div className="table-wrapper">
          {this.renderResultsTable()}
        </div>
      );
    }
    return (<p className="placeholder" />);
	}
}

function mapStateToProps({ videos, streams }) {
	//when have key:value that are ident can reduce to just one
	return { videos, streams };
}

export default connect(mapStateToProps)(DragonPunchList);
