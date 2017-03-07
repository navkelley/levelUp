import React, { Component } from 'react';

import YouTubeVideoDetail from './youtube/youtube_video_detail';
import YouTubeVideoList from '../containers/youtube_video_list';
import SearchBar from '../containers/search_bar';
import TwitchVideoList from '../containers/twitch_video_list';
import TwitchVideoDetail from './twitch/twitch_video_detail';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStream: null
    };
  }

  render() {
    return (
      <div>
        <h1 id="logo">Level Up</h1>

        <TwitchVideoDetail stream={this.state.selectedStream} />
        <TwitchVideoList
          onStreamSelect={selectedStream => this.setState({ selectedStream })}
        />
      </div>
    );
  }
}
