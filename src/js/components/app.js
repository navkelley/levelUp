import React, { Component } from 'react';
import VideoDetail from './video_detail';
import VideoList from './video_list';
import SearchBar from '../containers/search_bar';
import YouTubeSearch from 'youtube-api-search';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  /*videoSearch(term) {
    YouTubeSearch({ key: api_key, term }, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }*/

  render() {
    return (
      <div>
        <SearchBar videoSearch={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}