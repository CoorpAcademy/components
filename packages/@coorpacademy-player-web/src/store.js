import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {middlewares, reducers} from '@coorpacademy/player-store';

const {ErrorLogger, ReduxThunkMemoized, TourguideTrackingLogger} = middlewares;
const {data, ui} = reducers;

const createReducers = () =>
  combineReducers({
    data,
    ui
  });

const createMiddlewares = options => {
  return compose(
    applyMiddleware(
      ReduxThunkMemoized(options),
      ErrorLogger(options),
      TourguideTrackingLogger(options)
    ),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
};

const create = options => createStore(createReducers(), {}, createMiddlewares(options));
export {createMiddlewares, createReducers};
export default create;
