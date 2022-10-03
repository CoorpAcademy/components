import {NEXT_SLIDE, NextSlideAction} from '../../actions/ui/next-slide';
import {SET_CURRENT_SLIDE, SetCurrentSlideAction} from '../../actions/ui/slides';

export type CurrentSlideRefState = string;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CurrentSlideRefState = '',
  action: SetCurrentSlideAction | NextSlideAction
): CurrentSlideRefState => {
  switch (action.type) {
    case NEXT_SLIDE:
      return action.payload.nextSlideRef;
    case SET_CURRENT_SLIDE: {
      return action.payload._id;
    }
    default:
      return state;
  }
};

export default reducer;
