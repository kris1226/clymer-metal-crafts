import { combineReducers } from 'redux';
import images from './images';
import { routerStateReducer as router } from 'redux-router';
import {
  SELECT_IMAGE, INVALIDATE_IMAGE,
  REQUEST_IMAGES, RECEIVE_IMAGES
} from '../actions';

function selectedClient(state = 'client', action) {
  switch (action.type) {
    case SELECT_CLIENT:
      return action.client;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    images,
    router
});

export default rootReducer;
