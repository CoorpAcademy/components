import compact from 'lodash/fp/compact';
import isEmpty from 'lodash/fp/isEmpty';
import pipe from 'lodash/fp/pipe';
import {
  EditAnswerAction,
  EDIT_BASIC,
  EDIT_QCM,
  EDIT_QCM_DRAG,
  EDIT_QCM_GRAPHIC,
  EDIT_SLIDER,
  EDIT_TEMPLATE
} from '../../actions/ui/answers';
import {PostAnswerRequestAction, POST_ANSWER_REQUEST} from '../../actions/api/post-answer';
import {SetValidateButtonStatus, SET_VALIDATE_BUTTON_STATUS} from '../../actions/ui/slides';

export type UISlideState = {
  validateButton: boolean;
};

export const initialState: UISlideState = {validateButton: false};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UISlideState = initialState,
  action: SetValidateButtonStatus | PostAnswerRequestAction | EditAnswerAction
): UISlideState => {
  switch (action.type) {
    case EDIT_QCM:
    case EDIT_QCM_GRAPHIC:
    case EDIT_QCM_DRAG:
    case EDIT_TEMPLATE:
    case EDIT_BASIC:
    case EDIT_SLIDER: {
      return pipe(compact, isEmpty)(action.payload) ? initialState : {validateButton: true};
    }
    case POST_ANSWER_REQUEST: {
      return initialState;
    }
    case SET_VALIDATE_BUTTON_STATUS: {
      return {validateButton: action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
