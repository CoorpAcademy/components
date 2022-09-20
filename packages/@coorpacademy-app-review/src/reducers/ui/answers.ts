import {includes, set, values} from 'lodash/fp';
import {EditAnswerAction, ANSWER_EDIT} from '../../actions/ui/answers';

export type UISlideAnswer = string[];
const ANSWER_EDIT_ACTIONS = values(ANSWER_EDIT);

export type UIAnswerState = Record<string, UISlideAnswer>;

export const initialState: UIAnswerState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIAnswerState = initialState,
  action: EditAnswerAction
): UIAnswerState => {
  return includes(action.type, ANSWER_EDIT_ACTIONS)
    ? set(action.meta.slideRef, action.payload, initialState)
    : state;
};

export default reducer;
