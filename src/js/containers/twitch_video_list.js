import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoListItem from '../components/twitch/twitch_video_list_item';

//map out streams to each data cell in table 
class TwitchVideoList extends Component {
	renderResultsTable() {
    return (
      <table id="twitch-streams">
        <tbody>
          {this.props.streams.data.map((stream) => {
            return (
              <TwitchVideoListItem
                onStreamSelect={this.props.onStreamSelect}
                stream={stream}
                key={stream._id}
              />
            );
          })}
        </tbody>
      </table>
    );
	}
	render() {
    if (this.props.streams.isFetched) {
      return (
        <div className="table-wrapper">
          {this.renderResultsTable()}
        </div>
      );
    }
    else {
      return (<p className="placeholder" />);
    }
	}
}

//allow stream data to be used 
function mapStateToProps({ streams }) {
	//when have key:value that are ident can reduce to just one
	return { streams };
}

export default connect(mapStateToProps)(TwitchVideoList);
