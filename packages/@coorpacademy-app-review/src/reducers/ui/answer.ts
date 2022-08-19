import {EditBasicAction, EDIT_BASIC} from '../../actions/ui/answers';

export type AnswerState = string[];

const reducer = (
  // eslint-disable-next-line default-param-last
  state: AnswerState = [],
  action: EditBasicAction
): AnswerState => {
  switch (action.type) {
    case EDIT_BASIC: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
