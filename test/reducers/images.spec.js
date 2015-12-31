import expect from 'expect';
import * as types from '../../constants/actionTypes';
import images from '../../reducers/images';

describe('images reducers', () => {
  it('should handle selecting a image', () => {
    expect(
      images([
        {
          id: 1,
          src:'',
          desc: "somthing nice",
          price: 0.00
        }, {
          id: 2,
          desc: "somthing else nice",
          src: '',
          price: 0.00
        }
      ], {
        type: types.VIEW_DETAILS,
        id: 2
      })
    ).toEqual([
      {
        id: 2,
        src:'',
        desc: "somthing else nice",
        price: 0.00
      }
    ])
  });
});
