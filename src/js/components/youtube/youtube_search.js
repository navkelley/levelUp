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
      <section>
        <header className="aCreed header-img"></header>
        <h1 className="logo">Chosen Path: YouTube</h1>
        <SearchBar />
        <YouTubeVideoDetail video={this.state.selectedVideo} />
        <YouTubeVideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </section>
    );
  }
}
