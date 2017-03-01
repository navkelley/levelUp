import React, { Component } from 'react';

//need action for search

class SearchBar extends Component {
	constructor() {
		super();

		this.state = { term: '' };
	}

	_changeTerm = e => {
		this.setState({ term: e.target.value });
	}

	_submitSearch = e => {
		e.preventDefault();
		this.props.videoSearch(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this._submitSearch}>
				<input
					placeholder="Find videos on your favorite game"
					value={this.state.term}
					onChange={this._changeTerm}
				/>
			</form>
		);
	}
}

export default SearchBar;
