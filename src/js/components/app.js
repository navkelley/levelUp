import React, { Component } from 'react';
import YouTubeVideoDetail from './youtube/youtube_video_detail';
import YouTubeVideoList from '../containers/youtube_video_list';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <YouTubeVideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
