import { VIEW_DETAILS } from '../constants/actionTypes';

const initialState = [
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
];

export default function images(state = initialState, action) {
  switch (action.type) {
    case VIEW_DETAILS:
      return state.filter(todo =>
        todo.id == action.id
      );
    default:
    return state;
  }
}
