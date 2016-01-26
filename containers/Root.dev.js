import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import NavBar from '../containers/NavBar';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <Provider store={store}>
          <div>
            <ReduxRouter />
            <DevTools />
          </div>
        </Provider>
    </div>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
