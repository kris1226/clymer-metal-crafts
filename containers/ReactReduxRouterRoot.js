import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import NavBar from '../containers/NavBar';
import App from './App';
import DevTools from './DevTools';
import createHistory from 'history/lib/createHashHistory';
import ContactPage from './ContactPage';
import ImagesContainer from './ImagesContainer';

export default class ReactReduxRouterRoot extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={createHistory()}>
            <Route path="/" component={App}>
              <IndexRoute component={ImagesContainer} />
              <Route path="contact" component={ContactPage} />
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

ReactReduxRouterRoot.propTypes = {
  store: PropTypes.object.isRequired
}
