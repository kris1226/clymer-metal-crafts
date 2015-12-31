import expect from 'expect';
import * as actions from '../../actions/images';
import * as types from '../../constants/actionTypes';


describe.skip('image actions', () => {
  it("should create a REQUEST_IMAGES action", () => {
    const expextedAction = {
      type: types.REQUEST_IMAGES
    };
    expect(actions.requestImages()).toEqual(expextedAction);
  });

  it("should return VIEW_DETAILS", () => {

  });
});
