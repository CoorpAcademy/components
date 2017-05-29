import {INCREMENT, DECREMENT, ASSIGN} from '../actions';

export default (state = 0, action) => {
  switch (action.type) {
    case ASSIGN:
      return action.payload;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
