import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import './css/styleBlue.css';
import './css/bootstrap.css';
import './js/bootstrap.min.js';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);