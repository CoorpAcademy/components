import {createStore} from 'redux';
import createReducer from './reducers';
import createMiddleware from './middlewares';

export * from './utils/state-extract';
export * from './actions/api/analytics';
export * from './actions/api/answers';
export * from './actions/api/clues';
export * from './actions/api/comments';
export * from './actions/api/contents';
export * from './actions/api/exit-nodes';
export * from './actions/api/next-content';
export * from './actions/api/progressions';
export * from './actions/api/rank';
export * from './actions/api/recommendations';
export * from './actions/ui/answers';
export * from './actions/ui/clues';
export * from './actions/ui/coaches';
export * from './actions/ui/comments';
export * from './actions/ui/corrections';
export * from './actions/ui/extra-life';
export * from './actions/ui/location';
export * from './actions/ui/progressions';
export * from './actions/ui/route';
export * from './actions/ui/video';

const create = options => createStore(createReducer(options), {}, createMiddleware(options));

export default create;
