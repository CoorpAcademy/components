import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import {ANSWER_EDIT, ANSWER_RESET} from '../../actions/ui';

const editAnswerState = (state, questionType, answer) => {
  switch (questionType) {
    case 'qcm':
      if (includes(answer.label, state)) {
        return remove(label => label === answer.label)(state);
      } else {
        return [...state, answer.label];
      }

    case 'template':
      return answer;

    default:
  }
};

export default (state, {type, payload}) => {
  if (includes(type, ANSWER_EDIT)) {
    const {answer, questionType} = payload;
    return editAnswerState(state, questionType, answer);
  } else if (ANSWER_RESET) {
    return [];
  } else return state;
};
