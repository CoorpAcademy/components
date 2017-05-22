import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {ANSWER_EDIT} from '../../actions/ui';

export default (state = [], {type, payload: answer}) => {
  switch (type) {
    case ANSWER_EDIT: {
      if (includes(answer.id, state)) {
        return remove(id => id === answer.id)(state);
      } else {
        return [...state, answer.id];
      }
    }
    default:
      return state;
  }
};
