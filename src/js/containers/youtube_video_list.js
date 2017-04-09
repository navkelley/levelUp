import React, { Component } from 'react';
import { connect } from 'react-redux';

import YouTubeVideoListItem from '../components/youtube/youtube_video_list_item';

class YouTubeVideoList extends Component {
	renderResultsTable() {
    return (
      <table id="youtube">
				<tbody>
					{this.props.videos.data.map((video) => {
						return (
							<YouTubeVideoListItem
								onVideoSelect={this.props.onVideoSelect}
								video={video}
								key={video.etag}
							/>
						);
					})}
				</tbody>
			</table>
    );
  }
	render() {
		if (this.props.videos.isFetched) {
			if (this.props.videos.data.length === 0) {
        return (<p className="no-results">No results found!</p>);
      }
      return (
        <div className="table-wrapper">
				  {this.renderResultsTable()}
			  </div>
      );
    } 
    return (<p className="placeholder" />);
	}
}

//allow video data to be used 
function mapStateToProps({ videos }) {
  //when have key:value that are ident can reduce to just one
  return { videos };
}

export default connect(mapStateToProps)(YouTubeVideoList);
