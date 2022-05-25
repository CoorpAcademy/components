import {StoreToken, STORE_TOKEN} from '../actions';

// -----------------------------------------------------------------------------

export type State = string;
export const initialState: State = null;

// -----------------------------------------------------------------------------

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

export const getToken = appState => appState.token;

// -----------------------------------------------------------------------------

export default reducer;
