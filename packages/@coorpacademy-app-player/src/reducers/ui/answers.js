import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {ANSWER_EDIT} from '../../actions/ui';

const editAnswerState = (state, questionType, answer) => {
  switch (questionType) {
    case 'qcm':
      if (includes(answer.id, state)) {
        return remove(id => id === answer.id)(state);
      } else {
        return [...state, answer.id];
      }

    case 'template':
      return answer;

    default:
      return state;
  }
};

export default (state = [], {type, payload}) => {
  switch (type) {
    case ANSWER_EDIT: {
      const {answer, questionType} = payload;
      return editAnswerState(state, questionType, answer);
    }
    default:
      return state;
  }
};
