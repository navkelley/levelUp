/** Combined YouTube and Twitch Search */

import React, { Component } from 'react';

import YouTubeVideoDetail from './youtube/youtube_video_detail';
import YouTubeVideoList from '../containers/youtube_video_list';
import SearchBar from '../containers/search_bar';
import TwitchVideoList from '../containers/twitch_video_list';
import TwitchVideoDetail from './twitch/twitch_video_detail';
import DragonPunchList from '../containers/dragon_punch_list';

export default class PunchSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      selectedStream: null
    };
  }

  render() {
    return (
      <section className="dragon-punch">
        <header className="ryu-punch header-img"></header>
        <h1 className="logo">Chosen Path: Dragon Punch!</h1>
        <SearchBar />
        <TwitchVideoDetail stream={this.state.selectedStream} />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <DragonPunchList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          onStreamSelect={selectedStream => this.setState({ selectedStream })}
        />
      </section>
    );
  }
}
