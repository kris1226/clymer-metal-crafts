import * as actionTypes from '../constants/actionTypes';
import api from '../middleware/api';


function receiveImages(images) {
  return {
    type: actionTypes.RECEIVE_IMAGES,
    images: images,
    receivedAt: Date.now()
  };
}

const fetchImages = () => {
  return {
    type: actionTypes.FETCH_IMAGES_REQUEST,
    images: function () {
      api.getImages(images => {
        dispatch(receiveImages(images));
      });
    }
  }
}
export function getAllImages() {
  return dispatch => {
    api.getImages(images => {
      return dispatch(receiveImages(images));
    });
  };
}

export function loadImages() {
  debugger
  return (dispatch, getState) => {
    debugger;
    const imageCache = getState().images;
    debugger;
    if (imageCache === null) {
      return null;
    }
    return dispatch(fetchImages());
  }
}


const selectImageUnsafe = (imageId) => {
  return {
    type: actionTypes.VIEW_IMAGE_DETAILS,
    imageId
  };
}

export function selectImage(imageId) {
  return (dispatch, getState) => {
    if (getState().byId[imageId] != null) {
      return dispatch(selectImageUnsafe(imageId));
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
