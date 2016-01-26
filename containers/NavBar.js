import React, { Component, PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import logo from '../public/img/logo.png';
import smallLogo from '../public/img/logo-small.png';


const Logo = ({push, children}) => {
  return (
      <Link className="navbar-brand home" to="/">
        <img className="hidden xs hidden-sm" alt="CMC" src={logo} />
        <img className="visible-xs visible-sm" alt="CMC" src={smallLogo} />
        <span className="sr-only">Go to home page</span>
      </Link>
  );
}

const NavLinks = () => {
  return (
    <div className="navbar-collapse collapse" id="navigation">
      <ul className="nav navbar-nav navbar-left">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
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
  			<li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
		  </ul>
		</div>
  );
}

export default class NavBar extends Component {
  render() {
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
}

export default NavBar;
