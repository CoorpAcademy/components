import {StoreToken, STORE_TOKEN} from '../actions/token';
import {StoreState} from '../types/store-state';
import {TokenState as State} from '../types/states';

// -----------------------------------------------------------------------------

// export type State = string;
export const initialState: State = null;

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
const reducer = (state: State = initialState, action: StoreToken): State => {
  switch (action.type) {
    case STORE_TOKEN: {
      return action.payload;
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export const getToken = (appState: StoreState): StoreState['data']['token'] => appState.data.token;

// -----------------------------------------------------------------------------

export default reducer;
