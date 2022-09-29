import findIndex from 'lodash/fp/findIndex';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {NextSlide, NEXT_SLIDE} from '../../actions/ui/next-slide';

export type UIPositionState = number[];
const initialState: UIPositionState = [0, 1, 2, 3, 4];

const reducer = (
  // eslint-disable-next-line default-param-last
  state: UIPositionState = initialState,
  action: NextSlide
): UIPositionState => {
  switch (action.type) {
    case NEXT_SLIDE: {
      const {totalCorrectAnswers, answeredSlides, currentSlideRef, animationType, nextSlideRef} =
        action.payload;

      const nextCurrentSlidePosition = animationType === 'unstack' ? -1 : 4 - totalCorrectAnswers;
      const currentSlideIndex = findIndex(ref => ref === currentSlideRef, answeredSlides);
      if (answeredSlides.length < 5) {
        const newState = map(position => position - 1, state);
        return set([`${currentSlideIndex}`], nextCurrentSlidePosition)(newState);
      }

      return pipe(
        set([`${currentSlideIndex}`], nextCurrentSlidePosition),
        set([`${nextSlideRef}`], 0)
      )(state); // TODO hanlde this case
    }
    default:
      return state;
  }
};

export default reducer;
