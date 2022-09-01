import {StoreToken, STORE_TOKEN} from '../../actions/data/token';

export type TokenState = string;

// eslint-disable-next-line default-param-last
const reducer = (state: TokenState = '', action: StoreToken): TokenState => {
  switch (action.type) {
    case STORE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
