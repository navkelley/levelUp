/** Combined YouTube and Twitch Search */
import React, { Component } from 'react';
import Scroll from 'react-scroll';

import YouTubeVideoDetail from './youtube/youtube_video_detail';
import SearchBar from '../containers/search_bar';
import TwitchVideoDetail from './twitch/twitch_video_detail';
import DragonPunchList from '../containers/dragon_punch_list';

const scroller = Scroll.scroller;

export default class PunchSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      selectedStream: null
    };
  }

  componentDidUpdate() {
    this.scrollToPlayer();
  }

  scrollToPlayer =() => {
    scroller.scrollTo('videoPlayer', {
      duration: 1000,
      offset: -35,
      isDynamic: true,
      smooth: true,
      containerId: 'wrapper'
    });
  }

  render() {
    return (
      <div className="dragon-punch wrapper">
        <header className="header-img">
          <img src="http://i.imgur.com/lnZpsTe.jpg?1" alt="ryu punch" />
        </header>
        <h1 className="path">Chosen Path: Dragon Punch!</h1>
        <SearchBar />
        <TwitchVideoDetail stream={this.state.selectedStream} />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <DragonPunchList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          onStreamSelect={selectedStream => this.setState({ selectedStream })}
        />
      </div>
    );
  }
}
