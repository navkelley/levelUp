import React, { Component } from 'react';

import YouTubeVideoList from '../../containers/youtube_video_list';
import YouTubeVideoDetail from './youtube_video_detail';
import SearchBar from '../../containers/search_bar';

export default class YouTubeSearch extends Component {
  constructor(props) {
    super(props);
    //state of embed player 
    this.state = {
      selectedVideo: null
    };
  }

  render() {
    return (
      <div className="youtube wrapper">
        <header className="aCreed header-img">
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
