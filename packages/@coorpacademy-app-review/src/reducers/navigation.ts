import {NAVIGATE_BACK, NAVIGATE_TO} from '../actions/navigation';
import type {$NAVIGATE_TO, $NAVIGATE_BACK} from '../actions/navigation';

export type State = Array<string>;

export const initialState: State = ['home'];

const reducer = (state: State = initialState, action: $NAVIGATE_TO | $NAVIGATE_BACK): State => {
  switch (action.type) {
    case NAVIGATE_TO: {
      return [...state, action.payload];
    }
    case NAVIGATE_BACK: {
      const newState = [...state];
      newState.pop();
      return newState;
    }
    default:
      return state;
  }
};

export const getCurrentViewName = appState => appState.navigation[appState.navigation.length - 1];
export default reducer;
