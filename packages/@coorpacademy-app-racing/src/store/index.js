import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import createMiddleware from './middlewares';
import {createPollingSaga} from './middlewares/polling-saga';

const create = options => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(createReducer(options), {}, createMiddleware(options, sagaMiddleware));
  const pollingSaga = createPollingSaga(options);
  sagaMiddleware.run(pollingSaga);
  return store;
};

export default create;
