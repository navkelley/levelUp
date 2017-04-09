import React, { Component } from 'react';
import Scroll from 'react-scroll';

import YouTubeVideoList from '../../containers/youtube_video_list';
import YouTubeVideoDetail from './youtube_video_detail';
import SearchBar from '../../containers/search_bar';

const scroller = Scroll.scroller;

export default class YouTubeSearch extends Component {
  constructor(props) {
    super(props);
    //state of embed player 
    this.state = {
      selectedVideo: null
    };
  }
  componentDidUpdate() {
    this.scrollToPlayer();
  }
  scrollToPlayer =() => {
    scroller.scrollTo('videoPlayer', {
      duration: 1000,
      offset: -30,
      isDynamic: true,
      smooth: true,
      containerId: 'wrapper'
    });
  }

  render() {
    return (
      <div className="youtube wrapper">
        <header className="header-img">
          <img src="http://i.imgur.com/gURoEL7.jpg" alt="assassin creed" />
        </header>
        <h1 className="path">Chosen Path: YouTube</h1>
        <SearchBar />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <YouTubeVideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
