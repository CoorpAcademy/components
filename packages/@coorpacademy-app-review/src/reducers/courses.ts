import {ReceivedCourse, RECEIVED_COURSE} from '../actions/courses';

// -----------------------------------------------------------------------------

export type State = Array<unknown>;
export const initialState: State = [];

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: ReceivedCourse): State => {
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
