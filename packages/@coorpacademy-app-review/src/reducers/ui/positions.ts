import filter from 'lodash/fp/filter';
import findIndex from 'lodash/fp/findIndex';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {ProgressionAnswerItem} from '../../types/common';
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
      const {allAnswers, slides, currentSlideRef, animationType, nextSlideRef} = action.payload;
      const correctAnswers = filter(
        (answer: ProgressionAnswerItem) => answer.isCorrect,
        allAnswers
      );
      const nextCurrentSlidePosition = animationType === 'unstack' ? -1 : 4 - correctAnswers.length;
      const currentSlideIndex = findIndex(ref => ref === currentSlideRef, slides);
      const nextSlideIndex = findIndex(ref => ref === nextSlideRef, slides);
      console.log(
        currentSlideIndex,
        nextCurrentSlidePosition,
        '|',
        nextSlideIndex,
        0,
        pipe(
          set([`${currentSlideIndex}`], nextCurrentSlidePosition),
          set([`${nextSlideIndex}`], 0)
        )(state)
      );

      return pipe(
        set([`${currentSlideIndex}`], nextCurrentSlidePosition),
        set([`${nextSlideIndex}`], 0)
      )(state);
    }
    default:
      return state;
  }
};

export default reducer;
