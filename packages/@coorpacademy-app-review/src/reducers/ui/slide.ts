import compact from 'lodash/fp/compact';
import isEmpty from 'lodash/fp/isEmpty';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
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
import {CORRECTION_FETCH_SUCCESS, ReceivedCorrection} from '../../actions/api/fetch-correction';

export type UISlideState = {
  validateButton: boolean;
  animateCorrectionPopin?: boolean;
  showCorrectionPopin?: boolean;
};

export const initialState: UISlideState = {validateButton: false};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UISlideState = initialState,
  action: PostAnswerRequestAction | EditAnswerAction | ReceivedCorrection
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
    case CORRECTION_FETCH_SUCCESS: {
      return pipe(set(['animateCorrectionPopin'], true), set(['showCorrectionPopin'], true))(state);
    }
    default:
      return state;
  }
};

export default reducer;
