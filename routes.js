import React from 'react';
import { Route , Router } from 'react-router';
import App from './containers/App';
import DetailsPage from './containers/DetailsPage';
import ImagesContianer from './containers/ImagesContainer';
import Image from './components/Image';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory();

export default (
  <Router history={history}>
    <Route path="/" component={App}>
        <Route path="image/:imageId" component={DetailsPage} />
      <Route path="image/:imageId" component={DetailsPage} />
    </Route>
  </Router>
)
