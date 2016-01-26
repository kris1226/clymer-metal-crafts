import React, { Component, PropTypes } from 'react';
import ImagesContainer from './ImagesContainer';
import NavBar from '../containers/NavBar';
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <NavBar />
          <div id="all">
            <div id="contnet">
              <div className="container">
                <div className="col-md-12">
                  {children}
                </div>
              </div>
            </div>
          </div>
      </div>

    );
  }
}

export default connect(
  null,
  routeActions
)(App);
