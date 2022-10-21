import {NextSlideAction, NEXT_SLIDE} from '../../actions/ui/next-slide';
import {FetchProgression, POST_PROGRESSION_REQUEST} from '../../actions/api/post-progression';

export type UIShowCongratsState = boolean;

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIShowCongratsState = false,
  action: NextSlideAction | FetchProgression
): UIShowCongratsState => {
  switch (action.type) {
    case POST_PROGRESSION_REQUEST: {
      return false;
    }
    case NEXT_SLIDE: {
      const {nextSlideRef} = action.payload;
      if (nextSlideRef === 'successExitNode') return true;

      return false;
    }
    default:
      return state;
  }
};

export default reducer;
