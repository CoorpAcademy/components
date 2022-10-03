import findIndex from 'lodash/fp/findIndex';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import {ReceivedProgression, POST_PROGRESSION_SUCCESS} from '../../actions/api/post-progression';
import {NextSlideAction, NEXT_SLIDE} from '../../actions/ui/next-slide';

export type UIPositionState = number[];
const initialState: UIPositionState = [0, 1, 2, 3, 4];

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIPositionState = initialState,
  action: NextSlideAction | ReceivedProgression
): UIPositionState => {
  switch (action.type) {
    case POST_PROGRESSION_SUCCESS: {
      return initialState;
    }
    case NEXT_SLIDE: {
      const {totalCorrectAnswers, answeredSlides, currentSlideRef, animationType, nextSlideRef} = action.payload;
      if (nextSlideRef === 'successExitNode') return state;

      const nextCurrentSlidePosition = animationType === 'unstack' ? -1 : 4 - totalCorrectAnswers;
      const currentSlideIndex = findIndex(ref => ref === currentSlideRef, answeredSlides);
      const newState = map(position => (position === -1 ? position : position - 1), state);
      return set([`${currentSlideIndex}`], nextCurrentSlidePosition)(newState);
    }
    default:
      return state;
  }
};

export default reducer;
