import * as types from '../constants/actionTypes';
import 'isomorphic-fetch';


function fetchImagesRequest() {
  return {
    type: types.FETCH_IMAGES_REQUEST
  }
};

function fetchImagesSuccess(body) {
  return {
    type: types.FETCH_IMAGES_SUCCESS,
    body
  }
}

function fetchImagesFailue(ex) {
  return {
    type: types.FETCH_IMAGES_FAILURE,
    ex
  }
}
export function receiveImages(json) {
  return {
    type: types.RECEIVE_IMAGES,
    images: json,
    receivedAt: Date.now()
  }
};

export function fetchImages() {
  console.log("inside of fetch images");
  return dispatch => {
    dispatch(fetchImagesRequest());
    return fetch('http:example.com/images')
      .then(res => res.json())
      .then(json => dispatch(fetchImagesSuccess(json.body)))
      .catch(ex => dispatch(fetchImagesFailue(ex)));
  }
}
