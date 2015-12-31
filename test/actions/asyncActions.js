import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/images';
import * as types from '../../constants/actionTypes';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe.skip('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_IMAGES_SUCCESS when fetching images has been done', (done) => {
    nock('http://example.com/')
      .get('/images')
      .reply(200, {
        body: {
          images: [
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
          ]
        }
      });

      const expectedActions = [
        {
          type: types.FETCH_IMAGES_REQUEST
        },
        {
          type: types.FETCH_IMAGES_SUCCESS, body: {
          images: [
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
          ]
        }
      }
    ];

    const store = mockStore({ images: [] }, expectedActions, done);
    console.log(store);
    store.dispatch(actions.fetchImages());
    });
});
