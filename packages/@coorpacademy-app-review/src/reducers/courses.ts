import {$RECEIVED_COURSE, RECEIVED_COURSE} from '../actions';

// -----------------------------------------------------------------------------

export type State = Array<any>;
export const initialState: State = [];

// -----------------------------------------------------------------------------

const reducer = (state: State = initialState, action: $RECEIVED_COURSE): State => {
  switch (action.type) {
    case RECEIVED_COURSE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
