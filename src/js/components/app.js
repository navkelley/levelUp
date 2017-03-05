import React, { Component } from 'react';

import YouTubeVideoDetail from './youtube/youtube_video_detail';
import YouTubeVideoList from '../containers/youtube_video_list';
import SearchBar from '../containers/search_bar';
import TwitchVideoList from '../containers/twitch_video_list';
import TwitchVideoDetail from './twitch/twitch_video_detail';
import Logo from './img';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      selectedStream: null
    };
  }

  render() {
    return (
      <div>
        <Logo src="../images/level-up.jpg" alt="level-up-logo" />
        <SearchBar />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <YouTubeVideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
        <TwitchVideoDetail stream={this.state.selectedStream} />
        <TwitchVideoList
          onStreamSelect={selectedStream => this.setState({ selectedStream })}
        />
      </div>
    );
  }
}
