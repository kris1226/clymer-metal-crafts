import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import routes from '../routes';
import DevTools from '../containers/DevTools';
import createHistory from 'history/lib/createHashHistory';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  reduxReactRouter({
    routes,
    createHistory
  }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if(module.hot) {
    //enable webpack hot module replacment for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  debugger;
  return store;
}
