import forEach from 'lodash/fp/forEach';
import {UpdateFinishedSlides, UPDATE_FINISHED_SLIDES} from '../../actions/ui/finished-slides';
import {slideNumbers} from '../../common';

// -----------------------------------------------------------------------------
// Stores only successful slides
export type FinishedSlidesState = {
  slideNumbers: number[];
  [key: number]: true;
};

// -----------------------------------------------------------------------------

export const initialState: FinishedSlidesState = {
  slideNumbers
};

// -----------------------------------------------------------------------------

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
      const {slideNumbers: _slideNumbers, ...rest} = state;
      const {slideNumber, value} = action.payload;
      const _state: FinishedSlidesState = {
        slideNumbers: _slideNumbers
      };

      _forEach<Omit<FinishedSlidesState, 'slideNumbers'>>((finishedSlide, index) => {
        const previousValue = finishedSlide;
        _state[index] = previousValue;
      }, rest);

      _state[slideNumber] = value;
      return _state;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
