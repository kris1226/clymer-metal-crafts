import * as actionTypes from '../constants/actionTypes';
import api from '../middleware/api';

function receiveImages(images) {
  return {
    type: actionTypes.RECEIVE_IMAGES,
    images: images,
    receivedAt: Date.now()
  };
}

export function getAllImages() {
  return dispatch => {
    api.getImages(images => {
      dispatch(receiveImages(images));
    });
  };
}

function selectImageUnsafe(imageId) {
  return {
    type: actionTypes.VIEW_IMAGE_DETAILS,
    imageId
  };
}

export function selectImage(imageId) {
  return (dispatch, getState) => {
    if (getState().byId[imageId] != null) {
      dispatch(selectImageUnsafe(imageId));
    }
  };
}

export function invalidateClient(reddit) {
  return {
    type: INVALIDATE_CLIENT,
    client
  }
}

function requestClients() {
  return {
    type: REQUEST_DATA
  };
}

export function fetchClients() {
  return dispatch => {
    dispatch(requestClients());
    return fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(json => dispatch(receiveClients(json)));
  }
}

function shouldFetchClients(state) {
  const clients = state.clients;
  if (!clients) {
    return true
  }
  if (clients.isFetching) {
    return false
  }
  return clients.didInvalidate
}

export function fetchClientsIfNeeded() {
  return (dispatch, getState) => {
      if(shouldFetchClients(getState())){
        return dispatch(fetchClients());
      }
  };
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  };
}



/** WEBPACK FOOTER **
 ** D:/Code/Reactjs-Projects/clymer-metal-crafts/actions/imagesActions.js
 **/