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
      <nav className="nav-menu clearfix:after">
        <Link to="/">Home</Link>
        <Link to="/search/youtube">YouTube</Link>
        <Link to="/search/twitch">Twitch</Link>
        <Link to="/search">Dragon Punch!</Link>
      </nav>
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
      <div className="navbar">
        {this.navigationLinks()}
      </div>
    );
  }

  render() {
    return (
      <div className="nav-container light-fade">
        {this.renderNavigation()}
      </div>
    );
  }
}
