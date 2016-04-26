import expect from 'expect';
import * as actions from '../../actions/images';
import * as imagesActions from '../../actions/imagesActions';
import * as types from '../../constants/actionTypes';


describe.skip('image actions', () => {
  it("should create a REQUEST_IMAGES action", () => {
    const expextedAction = {
      type: types.REQUEST_IMAGES
    };
    expect(actions.requestImages())
      .toEqual(expextedAction);
  });

  it("should return VIEW_DETAILS", () => {

  });

  it("should return SELECT_IMAGE", () => {
    const id = 1;
    const expectedAction = {
      type: types.SELECT_IMAGE,
      id
    };
    expect(actions.selectImage(id))
      .toEqual(expectedAction);
  });
});

describe('image actions', () => {
  it("should return SELECT_IMAGE", () => {
    const id = 1;
    const expectedAction = {
      type: types.SELECT_IMAGE,
      id
    };
    expect(actions.selectImage(id))
      .toEqual(expectedAction);
  });
  it("should return ")
});
