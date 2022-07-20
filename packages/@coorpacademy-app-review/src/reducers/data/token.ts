import {StoreToken, STORE_TOKEN} from '../../actions/data/token';

export type TokenState = string | null;

// eslint-disable-next-line default-param-last
const reducer = (state: TokenState = null, action: StoreToken): TokenState => {
  switch (action.type) {
    case STORE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
