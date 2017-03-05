import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoListItem from '../components/twitch/twitch_video_list_item';

class TwitchVideoList extends Component {
  render() {
    return (
      <div>
        <table className="twitchVideo-table">
          <tbody>
            {this.props.streams.map((stream) => {
              return (
                <tr key={stream._id}>
                  <TwitchVideoListItem
                    onStreamSelect={this.props.onStreamSelect}
                    stream={stream}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ streams }) {
  //when have key:value that are ident can reduce to just one
  return { streams };
}

export default connect(mapStateToProps)(TwitchVideoList);
