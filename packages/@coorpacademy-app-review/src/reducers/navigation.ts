import {NAVIGATE_BACK, NAVIGATE_TO, ViewPath} from '../actions/navigation';
import type {NavigateTo, NavigateBack} from '../actions/navigation';
import {StoreState} from '../types/store-state';
import {NavigationState as State} from '../types/states';

// -----------------------------------------------------------------------------

// export type State = Array<string>;
export const initialState: State = [];

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
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

export const getCurrentViewName = (appState: StoreState): ViewPath =>
  appState.ui.navigation[appState.ui.navigation.length - 1];

// -----------------------------------------------------------------------------

export default reducer;
