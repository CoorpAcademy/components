import {START_APP} from '../actions/navigation';
import type {$START_APP} from '../actions/navigation';

// -----------------------------------------------------------------------------

export type State = string;
export const initialState: State = null;

// -----------------------------------------------------------------------------

const reducer = (state: State = initialState, action: $START_APP): State => {
  switch (action.type) {
    case START_APP: {
      return action.payload.token;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export const getToken = appState => appState.token;

// -----------------------------------------------------------------------------

export default reducer;
