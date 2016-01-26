import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { reduxReactRouter } from 'redux-router';
import routes from '../routes';
import DevTools from '../containers/DevTools';
//import createHistory from 'history/lib/createHashHistory';
import createLogger from 'redux-logger';
import reducer from '../reducers/images';
import thunk from 'redux-thunk';
import { getAllImages } from '../actions/imagesActions';


const syncHistoryMiddleWare = syncHistory(history);

const finalCreateStore = compose(
  applyMiddleware(thunk, syncHistoryMiddleWare),
  syncHistory(browserHistory),
  //reduxReactRouter({ routes, createHistory}),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = finalCreateStore(reducer);
  syncHistoryMiddleWare.listenForReplays(store);
  store.dispatch(getAllImages());
  if(module.hot) {
    //enable webpack hot module replacment for reducers
    module.hot.accept('../reducers/images', () => {
      const nextReducer = require('../reducers/images');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
