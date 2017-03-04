import React, { Component } from 'react';
import VideoDetail from './video_detail';
import VideoList from '../containers/video_list';
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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
