import forEach from 'lodash/fp/forEach';
import {UpdateFinishedSlides, UPDATE_FINISHED_SLIDES} from '../../actions/ui/finished-slides';
import {slideNumbers} from '../../common';
import {FinishedSlides} from '../../types/finished-slides';

const _forEach: <T>(
  iteratee: (value: T[keyof T], index: number) => void,
  collection: T
  // @ts-expect-error to remove lodash's forEach iteratee args number cap
) => void = forEach.convert({
  cap: false
});

// -----------------------------------------------------------------------------

export type State = FinishedSlides;
export const initialState: State = {
  slideNumbers
};

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: UpdateFinishedSlides): State => {
  switch (action.type) {
    case UPDATE_FINISHED_SLIDES: {
      const {slideNumbers: _slideNumbers, ...rest} = state;
      const {slideNumber, value} = action.payload;
      const _state: State = {
        slideNumbers: _slideNumbers
      };

      _forEach<Omit<State, 'slideNumbers'>>((finishedSlide, index) => {
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
