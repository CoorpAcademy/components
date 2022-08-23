import {includes, values} from 'lodash/fp';
import {EditAnswerAction, ANSWER_EDIT} from '../../actions/ui/answers';

export type AnswerState = string[];
const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

const reducer = (
  // eslint-disable-next-line default-param-last
  state: AnswerState = [],
  action: EditAnswerAction
): AnswerState => {
  return includes(action.type, ANSWER_EDIT_ACTIONS) ? action.payload : state;
};

export default reducer;
