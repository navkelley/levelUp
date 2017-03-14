import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  navigationLinks() {
    return (
      <ul className="nav-menu">
        <li key={1} className="home btn">
          <Link to="/">Home</Link>
        </li>
        <li key={2} className="only-youtube btn">
          <Link to="/search/youtube" className="youtube">YouTube</Link>
        </li>
        <li key={3} className="only-twitch btn">
          <Link to="/search/twitch" className="twitch">Twitch</Link>
        </li>
        <li key={4} className="dragon-punch btn">
          <Link to="/search" className="dragon-punch">Dragon Punch!</Link>
        </li>
      </ul>
    );
  }

  handleNavClick() {
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    }
    else {
      this.setState({ mobileNavVisible: false });
    }
  }

  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  renderNavigation() {
    if (this.state.windowWidth <= 900) {
      return (
        <div className="mobile-nav">
          <p className="mobile-bars" onClick={this.handleNavClick.bind(this)}>
            <i className="fa fa-bars" aria-hidden="true" />
          </p>
          {this.renderMobileNav()}
        </div>
      );
    }
    return (
      <div key={7} className="nav-mobile">
        {this.navigationLinks()}
      </div>
    );
  }

  render() {
    return (
      <div className="nav-container">
        <div className="navbar">
          {this.renderNavigation()}
        </div>
      </div>
    );
  }
}
