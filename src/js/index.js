import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BabelPoly from 'babel-polyfill';
import { Router, Route, hashHistory } from 'react-router';
import YouTubeSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const api_key = 'AIzaSyBiZx8Ti_Bajxu-sAFjYHUr-lS4jwReH-0';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch();
	}

	videoSearch() {
		YouTubeSearch({ key: api_key, term: 'doberman pinscher' }, (videos) => {
			console.log(videos);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				{this.videoSearch}
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<App />, document.getElementById('app'));
});
