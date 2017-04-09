import React, { Component } from 'react';
import Scroll from 'react-scroll';

import TwitchVideoList from '../../containers/twitch_video_list';
import TwitchVideoDetail from './twitch_video_detail';
import SearchBar from '../../containers/search_bar';

const scroller = Scroll.scroller;

export default class TwitchSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //state of embed player
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
      <div className="twitch wrapper">
        <header className="header-img">
          <img src="http://i.imgur.com/KnlLxMy.jpg" alt="nioh spirit animal" />
        </header>
        <h1 className="path">Chosen Path: Twitch</h1>
        <p className="note">For best results do not use abbreviation (ex. World of Warcraft, not WOW)</p>
        <SearchBar />
        <TwitchVideoDetail stream={this.state.selectedStream} />
        <TwitchVideoList
          onStreamSelect={selectedStream => this.setState({ selectedStream })}
        />
      </div>
    );
  }
}
