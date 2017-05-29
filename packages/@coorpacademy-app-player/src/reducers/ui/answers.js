import includes from 'lodash/fp/includes';
import {ANSWER_EDIT, ANSWER_RESET} from '../../actions/ui/answers';

export default (state = [], {type, payload}) => {
  if (includes(type, ANSWER_EDIT)) {
    return payload.answer;
  } else if (type === ANSWER_RESET) {
    return payload;
  } else return state;
};
