import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { youTubeSearch } from '../actions/youtube';
import { twitchSearch } from '../actions/twitch';

class SearchBar extends Component {
	constructor() {
		super();

		this.state = { term: '' };
		this.submitSearch = this.submitSearch.bind(this);
	}

	changeTerm = e => {
		this.setState({ term: e.target.value });
	}

	submitSearch = e => {
		e.preventDefault();
		this.props.youTubeSearch(this.state.term);
		this.props.twitchSearch(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<div className="search-bar">
				<span className="input-btn">
					<form id="search" onSubmit={this.submitSearch}>
						<input
							type="text"
							placeholder="Find videos on your favorite game"
							value={this.state.term}
							onChange={this.changeTerm}
						/>
						<button type="submit" className="submit-btn">Submit <i className="fa fa-search" aria-hidden="true" /></button>
					</form>
				</span>
			</div>
		);
	}
}
//allow actions to put results as props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ youTubeSearch, twitchSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
