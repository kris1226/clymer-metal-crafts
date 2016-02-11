import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { routeReducer } from 'react-router-redux';
import {
  RECEIVE_IMAGES,
  VIEW_IMAGE_DETAILS
} from '../constants/actionTypes';

export default combineReducers({
  byId,
  visibleIds,
  images,
  routing: routeReducer
});

 function images(state ={}, action) {
  switch (action.type) {
    case VIEW_IMAGE_DETAILS:
      return {
        ...state[action.imageId]
      }
    default:
    return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return {
        ...state,
        ...action.images.reduce((obj, image) => {
          obj[image.id] = image;
          return obj;
        }, {})
      };
    default:
      const { imageId } = action;
      if(imageId) {
        return {
          ...state[imageId],
          [imageId]: images(state[imageId], action)
        }
      }
      return state;
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images.map(image => image.id);
    default:
      return state;
  }
}

export function getImage(state, id) {
  return state.byId[id];
}

export function getVisibleImages(state) {
  return state.visibleIds.map(id => getImage(state, id));
}
