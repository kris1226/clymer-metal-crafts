import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { RECEIVE_IMAGES, VIEW_IMAGE_DETAILS, FETCH_IMAGES_REQUEST } from '../constants/actionTypes';
import merge from 'lodash/object/merge';

 const images = (state ={}, action) => {
  switch (action.type) {
    case VIEW_IMAGE_DETAILS:
      return {
        ...state[action.imageId]
      }
    default:
    return state;
  }
}

const byId = (state = {}, action) => {
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

const visibleIds = (state = [], action) => {
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

const updateImages = ( state = {
  ...state,
  isFetching: false,
  images: [],
}, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      debugger;
      return merge({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
}
const imagesReducer = combineReducers({
  byId,
  visibleIds,
  images,
  updateImages,
  routing: routeReducer,
});

export default imagesReducer;
