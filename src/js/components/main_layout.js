/**
  * comments to go here
  **/
import React, { Component } from 'react';
import { Link } from 'react-router';
import { DropDown, DropDownTrigger, DropDownContent } from 'react-simple-dropdown';

import NavContainer from './nav_bar';

//turn to class component with state--use conditional or ?
export default class MainLayout extends Component {
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
          <NavContainer />
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
