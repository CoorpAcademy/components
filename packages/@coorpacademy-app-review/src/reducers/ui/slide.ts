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
  validateButton?: boolean;
  animateCorrectionPopin?: boolean;
  showCorrectionPopin?: boolean;
};

export type SlideState = Record<string, UISlideState>;

export const initialState: SlideState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: SlideState = initialState,
  action: PostAnswerRequestAction | EditAnswerAction | ReceivedCorrection
): SlideState => {
  switch (action.type) {
    case EDIT_QCM:
    case EDIT_QCM_GRAPHIC:
    case EDIT_QCM_DRAG:
    case EDIT_TEMPLATE:
    case EDIT_BASIC:
    case EDIT_SLIDER: {
      return pipe(compact, isEmpty)(action.payload)
        ? set([action.meta.slideRef, 'validateButton'], false, initialState)
        : set([action.meta.slideRef, 'validateButton'], true, initialState);
    }
    case POST_ANSWER_REQUEST: {
      return set([action.meta.slideRef, 'validateButton'], false, initialState);
    }
    case CORRECTION_FETCH_SUCCESS: {
      return pipe(
        set([action.meta.slideRef, 'animateCorrectionPopin'], true),
        set([action.meta.slideRef, 'showCorrectionPopin'], true)
      )(state);
    }
    default:
      return state;
  }
};

export default reducer;
