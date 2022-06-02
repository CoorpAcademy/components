import {StoreSlide, STORE_SLIDE} from '../actions/slide';
import {Slide} from '../types/slide';

// -----------------------------------------------------------------------------

export type State = Slide;
export const initialState: State = null;

// -----------------------------------------------------------------------------

const reducer = (state: State = initialState, action: StoreSlide): State => {
  switch (action.type) {
    case STORE_SLIDE: {
      return action.payload;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
