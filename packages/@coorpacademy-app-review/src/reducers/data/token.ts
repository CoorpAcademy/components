import {StoreToken, STORE_TOKEN} from '../../actions/data/token';

// -----------------------------------------------------------------------------

export type State = string | null;

// -----------------------------------------------------------------------------

export const initialState: State = null;

// -----------------------------------------------------------------------------

// eslint-disable-next-line default-param-last
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
