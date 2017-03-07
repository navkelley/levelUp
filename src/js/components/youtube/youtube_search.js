import React, { Component } from 'react';

import YouTubeVideoList from '../../containers/youtube_video_list';
import YouTubeVideoDetail from './youtube_video_detail';
import SearchBar from '../../containers/search_bar';

export default class YouTubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null
    };
  }

  render() {
    return (
      <div>
        <h1 className="logo">Level Up By YouTube</h1>
        <SearchBar />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <YouTubeVideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
