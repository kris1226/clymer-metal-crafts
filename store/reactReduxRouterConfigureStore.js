import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import reducer from '../reducers/images';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createHashHistory'

const history = createHistory()
const syncHistoryMiddleWare = syncHistory(history);

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(syncHistoryMiddleWare),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = finalCreateStore(reducer);
  syncHistoryMiddleWare.listenForReplays(store);

  if(module.hot) {
    //enable webpack hot module replacment for reducers
    module.hot.accept('../reducers/images', () => {
      const nextReducer = require('../reducers/images');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
