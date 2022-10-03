import {set} from 'lodash/fp';
import {
  EditAnswerAction,
  EDIT_BASIC,
  EDIT_QCM,
  EDIT_QCM_DRAG,
  EDIT_QCM_GRAPHIC,
  EDIT_SLIDER,
  EDIT_TEMPLATE
} from '../../actions/ui/answers';
import {NextSlideAction, NEXT_SLIDE} from '../../actions/ui/next-slide';

export type UISlideAnswer = string[];

export type UIAnswerState = Record<string, UISlideAnswer>;

export const initialState: UIAnswerState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIAnswerState = initialState,
  action: EditAnswerAction | NextSlideAction
): UIAnswerState => {
  switch (action.type) {
    case EDIT_QCM:
    case EDIT_QCM_GRAPHIC:
    case EDIT_QCM_DRAG:
    case EDIT_TEMPLATE:
    case EDIT_BASIC:
    case EDIT_SLIDER: {
      return set([action.meta.slideRef], action.payload, initialState);
    }
    case NEXT_SLIDE: {
      return set([action.payload.nextSlideRef], [], state);
    }
    default:
      return state;
  }
};

export default reducer;
