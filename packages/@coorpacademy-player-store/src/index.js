import {createStore} from 'redux';
import createReducer from './reducers';
import createMiddleware from './middlewares';

const create = options => createStore(createReducer(options), {}, createMiddleware(options));
export default create;
