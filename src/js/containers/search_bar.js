import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { youTubeSearch } from '../actions/youtube';

//need action for search

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
		this.setState({ term: '' });
	}

	render() {
		return (
			<form id="search" onSubmit={this.submitSearch}>
				<input
					placeholder="Find videos on your favorite game"
					value={this.state.term}
					onChange={this.changeTerm}
				/>
				<span className="input-btn">
					<button type="submit" className="submit-btn">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ youTubeSearch }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
