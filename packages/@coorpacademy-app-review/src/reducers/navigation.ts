import {NAVIGATE_BACK, NAVIGATE_TO} from '../actions/navigation';
import type {NavigateTo, NavigateBack} from '../actions/navigation';

// -----------------------------------------------------------------------------

export type State = Array<string>;
export const initialState: State = ['home'];

// -----------------------------------------------------------------------------

const reducer = (state: State = initialState, action: NavigateTo | NavigateBack): State => {
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

// -----------------------------------------------------------------------------

export const getCurrentViewName = appState => appState.navigation[appState.navigation.length - 1];

// -----------------------------------------------------------------------------

export default reducer;
