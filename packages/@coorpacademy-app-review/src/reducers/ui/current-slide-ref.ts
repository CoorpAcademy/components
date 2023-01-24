import {NEXT_SLIDE, NextSlideAction} from '../../actions/ui/next-slide';
import {SET_CURRENT_SLIDE, SetCurrentSlideAction} from '../../actions/ui/slides';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type CurrentSlideRefState = string;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CurrentSlideRefState = '',
  action: SetCurrentSlideAction | NextSlideAction | FetchProgression
): CurrentSlideRefState => {
  switch (action.type) {
    case NEXT_SLIDE: {
      return action.payload.nextSlideRef;
    }
    case SET_CURRENT_SLIDE: {
      return action.payload._id;
    }
    case POST_PROGRESSION_REQUEST: {
      return '';
    }
    default:
      return state;
  }
};

export default reducer;
