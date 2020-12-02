import { INCREMENT, DECREMENT } from './../constants.js';
import { todoListArray } from './../../utils/constants.js';

export const counterReducer = (state = todoListArray.length, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};
