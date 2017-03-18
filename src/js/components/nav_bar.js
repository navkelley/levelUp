import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavContainer extends Component {
  constructor() {
    super();
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
      <ul className="nav-menu clearfix:after">
        <Link to="/">
          <li className="home btn">Home</li>
        </Link>
        <Link to="/search/youtube" className="youtube">
          <li className="only-youtube btn">YouTube</li>
        </Link>
        <Link to="/search/twitch" className="twitch">
          <li className="only-twitch btn">Twitch</li>
        </Link>
        <Link to="/search" className="dragon-punch">
          <li className="dragon-punch btn">Dragon Punch!</li>
        </Link>
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
          <p onClick={this.handleNavClick.bind(this)}>
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
