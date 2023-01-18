import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import type {SlideFromAPI} from '@coorpacademy/review-services';
import {ReceivedSlide, FetchSlide, SLIDE_FETCH_SUCCESS} from '../../actions/api/fetch-slide';
import {
  SetVideoPropsAction,
  SET_VIDEO_PROPS,
  ShowVideoAction,
  SHOW_VIDEO
} from '../../actions/api/fetch-video-props';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';
import {NextSlideAction, NEXT_SLIDE} from '../../actions/ui/next-slide';

export type SlidesAction = FetchSlide | ReceivedSlide | NextSlideAction | ShowVideoAction;

export type SlidesState = Record<string, SlideFromAPI | null>;
export const initialState: SlidesState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: SlidesState = initialState,
  action: SlidesAction | FetchProgression | SetVideoPropsAction
): SlidesState => {
  switch (action.type) {
    case SLIDE_FETCH_SUCCESS: {
      const slide = action.payload;
      return set([slide._id], slide, state);
    }
    case SET_VIDEO_PROPS: {
      const {slideId, props} = action.payload;
      return set([slideId, 'question', 'medias', '0'], props, state);
    }
    case POST_PROGRESSION_REQUEST: {
      return initialState;
    }
    case NEXT_SLIDE: {
      const {currentSlideRef} = action.payload;
      const isMediaVideo = get([currentSlideRef, 'question', 'medias', '0', 'type'], state);
      if (isMediaVideo) {
        return set([currentSlideRef, 'question', 'medias', '0', 'src', '0', 'hide'], true, state);
      }
      return state;
    }
    case SHOW_VIDEO: {
      const {slideId} = action.payload;
      return set([slideId, 'question', 'medias', '0', 'src', '0', 'hide'], false, state);
    }
    default:
      return state;
  }
};

export default reducer;
