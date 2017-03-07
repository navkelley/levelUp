/**
  * comments to go here
  **/
import React, { Component } from 'react';
import { Link } from 'react-router';
import { DropDown, DropDownTrigger, DropDownContent } from 'react-simple-dropdown';

//turn to class component with state--use conditional or ?
class MainLayout extends Component {
  constructor() {
    super();

    this.state = {
      isNavbarShow: false
    };
  }
//first need icon to show
//need to toggle state from false to true

  openMobileNav() {
    this.setState({ isNavbarShow: !this.state.isNavbarShow });
    //add dropdown to bars for mobile menu
  }

  render() {
    return (
      <div className="main-layout">
        <div id="navbar">
          {!this.state.isNavbarShow ? (
          <div className="wrapper">
            <nav onClick={() => this.openMobileNav()}>
              <Link to="/"><i className="fa fa-home fa-2x btn1" aria-hidden="true" /></Link>
              <Link to='#'><i className="fa fa-youtube fa-2x btn2" aria-hidden="true" /></Link>
              <Link to='#'><i className="fa fa-twitch fa-2x btn3" aria-hidden="true" /></Link>
              <Link to='#'>Punch!</Link>
            </nav>
          </div>
          ) : (
          <i className="fa fa-bars" aria-hidden="true"></i>)}
        </div>
        <div className="main">
          <div id="social">
            <Link to="#" className="twit" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></Link>
            <Link to="#" className="fbook" title="Facebook"><i className="fa fa-facebook-official" aria-hidden="true" /></Link>
            <Link to="#" className="gplus" title="Google Plus"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
          </div>
          <section>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}

export default MainLayout;
