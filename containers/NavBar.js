import React, { Component, PropTypes } from 'react';
import logo from '../img/logo.png';
import smallLogo from '../img/logo-small.png';


const Logo = () => {
  return (
      <a className="navbar-brand home" href="#">
        <img className="hidden xs hidden-sm" alt="CMC" src={logo} />
        <img className="visible-xs visible-sm" alt="CMC" src={smallLogo} />
        <span className="sr-only">Go to home page</span>
      </a>
  );
}

const NavLinks = () => {
  return (
    <div className="navbar-collapse collapse" id="navigation">
      <ul className="nav navbar-nav navbar-left">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

const NavButtons = () => {
  return (
    <div className="navbar-buttons">
    	<button className="navbar-toggle btn-primary" type="button" data-toggle="collapse" data-target="#navigation">
    	    <span className="sr-only">Toggle navigation</span>
    	    <i className="fa fa-align-justify"></i>
    	</button>
    </div>
  );
}

const NavCollapse = () => {
  return (
    <div className="navbar-collapse collapse in" id="navigation" style={{height: 'auto'}}>
		  <ul className="nav navbar-nav navbar-left">
  			<li className="active"><a href="/">Home</a></li>
  			<li><a href="/">Contact</a></li>
		  </ul>
		</div>
  );
}

export default () => {
  return (
    <div className="navbar navbar-default navbar-fixed-top yamm" id="navbar" role="navigation">
      <div className="container">
          <div className="navbar-header" href="#">
            <Logo />
            <NavButtons />
          </div>
        <NavCollapse />
      </div>
    </div>
  );
}
