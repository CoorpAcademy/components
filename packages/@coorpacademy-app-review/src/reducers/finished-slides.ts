import {UpdateFinishedSlides, UPDATE_FINISHED_SLIDES} from '../actions/finished-slides';
import {FinishedSlides} from '../types/finished-slides';

// -----------------------------------------------------------------------------

export type State = FinishedSlides;
export const initialState: State = new Map<number, true>();

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: UpdateFinishedSlides): State => {
  switch (action.type) {
    case UPDATE_FINISHED_SLIDES: {
      const {slideNumber, value} = action.payload;
      const _state = new Map();

      // eslint-disable-next-line fp/no-loops
      for (const [index, previousValue] of state) {
        _state.set(index, previousValue);
      }

      _state.set(slideNumber, value);
      return _state;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
