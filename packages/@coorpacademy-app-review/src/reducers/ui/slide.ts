import compact from 'lodash/fp/compact';
import isEmpty from 'lodash/fp/isEmpty';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import unset from 'lodash/fp/unset';
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
import {ReceivedCorrection, CORRECTION_FETCH_SUCCESS} from '../../actions/api/fetch-correction';
import {FetchSlide, SLIDE_FETCH_REQUEST} from '../../actions/api/fetch-slide';
import {NextSlide, NEXT_SLIDE} from '../../actions/ui/next-slide';
import {SlideUIAnimations} from '../../types/slides';

export type UISlide = {
  validateButton: boolean;
  animateCorrectionPopin: boolean;
  showCorrectionPopin: boolean;
  animationType?: SlideUIAnimations;
  position?: number;
};

export type UISlideState = Record<string, UISlide>;

export const initialState: UISlideState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UISlideState = initialState,
  action: FetchSlide | PostAnswerRequestAction | EditAnswerAction | ReceivedCorrection | NextSlide
): UISlideState => {
  switch (action.type) {
    case SLIDE_FETCH_REQUEST: {
      return pipe(
        unset([action.meta.slideRef, 'animationType']),
        set([action.meta.slideRef], {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        })
      )(state);
    }
    case EDIT_QCM:
    case EDIT_QCM_GRAPHIC:
    case EDIT_QCM_DRAG:
    case EDIT_TEMPLATE:
    case EDIT_BASIC:
    case EDIT_SLIDER: {
      return set(
        [action.meta.slideRef, 'validateButton'],
        !pipe(compact, isEmpty)(action.payload),
        state
      );
    }
    case POST_ANSWER_REQUEST: {
      return set([action.meta.slideRef, 'validateButton'], false, state);
    }
    case CORRECTION_FETCH_SUCCESS: {
      return pipe(
        set([action.meta.slideRef, 'animateCorrectionPopin'], true),
        set([action.meta.slideRef, 'showCorrectionPopin'], true)
      )(state);
    }
    case NEXT_SLIDE: {
      return pipe(
        set([action.payload.currentSlideRef, 'animateCorrectionPopin'], false),
        set([action.payload.currentSlideRef, 'animationType'], action.payload.animationType),
        set([action.payload.currentSlideRef, 'position'], action.payload.position),
        set([action.payload.nextSlideRef, 'position'], 0)
      )(state);
    }
    default:
      return state;
  }
};

export default reducer;
