import {get, set} from 'lodash/fp';
import {VideoPropsForPlayer} from '../../types/common';
import {
  SetVideoPropsAction,
  SET_VIDEO_PROPS,
  ShowVideoAction,
  SHOW_VIDEO
} from '../../actions/api/fetch-video-props';
import {NextSlideAction, NEXT_SLIDE} from '../../actions/ui/next-slide';
import {SetCurrentSlideAction} from '../../actions/ui/slides';

export type VideoPropsState = Record<string, VideoPropsForPlayer>;
export const initialState: VideoPropsState = {};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: VideoPropsState = initialState,
  action: SetVideoPropsAction | NextSlideAction | SetCurrentSlideAction | ShowVideoAction
): VideoPropsState => {
  switch (action.type) {
    case SET_VIDEO_PROPS: {
      const {slideId, props} = action.payload;
      return set(slideId, props, state);
    }
    case NEXT_SLIDE: {
      const {currentSlideRef} = action.payload;
      const isMediaVideo = get(currentSlideRef, state);
      if (isMediaVideo) {
        return set([currentSlideRef, 'src', '0', 'loading'], true, state);
      }
      return state;
    }
    case SHOW_VIDEO: {
      const {slideId} = action.payload;
      const isMediaVideo = get(slideId, state);
      if (isMediaVideo) {
        return set([slideId, 'src', '0', 'loading'], false, state);
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
