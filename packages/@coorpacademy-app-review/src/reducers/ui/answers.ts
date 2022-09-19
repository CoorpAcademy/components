import {includes, set, values} from 'lodash/fp';
import {EditAnswerAction, ANSWER_EDIT} from '../../actions/ui/answers';

export type UIAnswerState = string[];
const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

export type AnswerState = Record<string, UIAnswerState>;

export const initialState: AnswerState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: AnswerState = initialState,
  action: EditAnswerAction
): AnswerState => {
  return includes(action.type, ANSWER_EDIT_ACTIONS)
    ? set(action.meta.slideRef, action.payload, initialState)
    : state;
};

export default reducer;
