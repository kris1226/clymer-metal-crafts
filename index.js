import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import ReactReduxRouterRoot from './containers/ReactReduxRouterRoot';
//import configureStore from './store/configureStore';
import configureStore from './store/reactReduxRouterConfigureStore';
import './public/css/styleBlue.css';
import './public/css/bootstrap.css';
import './public/js/bootstrap.min.js';

const store = configureStore();

render(
  <ReactReduxRouterRoot store={store} />,
  document.getElementById('root')
);
