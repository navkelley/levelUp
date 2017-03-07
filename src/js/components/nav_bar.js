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
      <ul>
        <li key={1} className="home">
          <Link to="/">Home</Link>
        </li>
        <li key={2} className="only-youtube">
          <Link to="/search/youtube" className="btn2">YouTube</Link>
        </li>
        <li key={3} className="only-twitch">
          <Link to="/search/twitch" className="btn3">Twitch</Link>
        </li>
        <li key={4} className="dragon-punch">
          <Link to="/search" className="btn3">Dragon Punch!</Link>
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
    if (this.state.windowWidth <= 1080) {
      return (
        <div className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}><i className="fa fa-bars" aria-hidden="true" /></p>
          {this.renderMobileNav()}
        </div>
      );
    }
    else {
      return (
        <div key={7} className="nav-menu">
          {this.navigationLinks()}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-container">
        <div className="levelUp">
          {this.renderNavigation()}
        </div>
      </div>
    );
  }
}
