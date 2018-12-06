import {createStore} from 'redux';
import createReducer from './reducers';
import createMiddleware from './middlewares';

const create = options => createStore(createReducer(options), {}, createMiddleware(options));

/* 
  Object.defineProperty(exports, key, {
TypeError: Cannot redefine property: back
*/
export * from './utils/state-extract';
export * from './actions/ui/answers';
export * from './actions/ui/location';

export default create;
