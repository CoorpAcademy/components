import {StoreToken, STORE_TOKEN} from '../../actions/data/token';

// -----------------------------------------------------------------------------

export type State = string | null;

// -----------------------------------------------------------------------------

export const initialState: State = null;

// -----------------------------------------------------------------------------

const reducer = (state: State = initialState, action: StoreToken): State => {
  switch (action.type) {
    case STORE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
