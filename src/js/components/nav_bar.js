/**
  * navbar will hold links to other pages as well as create the mobile menu if needed  
  **/
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      //gathering window inner width to determine if mobile nav should be present 
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }
//add listeners for resize of window 
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
//take it off once component no longer needed 
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  navigationLinks() {
    return (
      <nav className="nav-menu clearfix:after">
        <ul>
          <Link to="/" className="nav-link" onClick={this.handleNavClick}><li>Home</li></Link>
          <Link to="/search/youtube" className="nav-link" onClick={this.handleNavClick}><li>YouTube</li></Link>
          <Link to="/search/twitch" className="nav-link" onClick={this.handleNavClick}><li>Twitch</li></Link>
          <Link to="/search" className="nav-link" onClick={this.handleNavClick}><li>Dragon Punch!</li></Link>
        </ul>
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
//render mobile nav if window size certain width
  renderNavigation() {
    if (this.state.windowWidth <= 480) {
      return (
        <div className="mobile-nav">
          <p className="mobile-bars" onClick={this.handleNavClick}>
            <i className="fa fa-bars" id="hamburger" aria-hidden="true" />
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
      <div className="nav-container light-fade-top">
        {this.renderNavigation()}
      </div>
    );
  }
}
