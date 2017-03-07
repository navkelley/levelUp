import React, { Component } from 'react';

import TwitchVideoList from '../../containers/twitch_video_list';
import TwitchVideoDetail from './twitch_video_detail';
import SearchBar from '../../containers/search_bar';

export default class TwitchSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStream: null
    };
  }

  render() {
    return (
      <div>
        <h1 className="logo">Level Up By Twitch</h1>
        <SearchBar />
         <TwitchVideoDetail stream={this.state.selectedStream} />
        <TwitchVideoList
          onStreamSelect={selectedStream => this.setState({ selectedStream })}
        />
      </div>
    );
  }
}
