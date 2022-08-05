import forEach from 'lodash/fp/forEach';
import {UpdateFinishedSlides, UPDATE_FINISHED_SLIDES} from '../../actions/ui/finished-slides';
import {indexToString, SlideIndexes} from '../../common';

export type FinishedSlidesState = {
  [key in SlideIndexes]?: true;
};

const initialState: FinishedSlidesState = {};

const _forEach: <T>(
  iteratee: (value: T[keyof T], index: number) => void,
  collection: T
  // @ts-expect-error to remove lodash's forEach iteratee args number cap
) => void = forEach.convert({
  cap: false
});

// -----------------------------------------------------------------------------

const reducer = (
  // eslint-disable-next-line default-param-last
  state: FinishedSlidesState = initialState,
  action: UpdateFinishedSlides
): FinishedSlidesState => {
  switch (action.type) {
    case UPDATE_FINISHED_SLIDES: {
      const {...rest} = state;
      const {slideIndex, value} = action.payload;
      const _state: FinishedSlidesState = {};

      _forEach<FinishedSlidesState>((finishedSlide, index) => {
        const previousValue = finishedSlide;
        _state[indexToString(index)] = previousValue;
      }, rest);

      _state[slideIndex] = value;
      return _state;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
