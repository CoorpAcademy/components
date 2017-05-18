import {createStore} from 'redux';
import {render} from 'react-dom';
import pipe from 'lodash/fp/pipe';
import createReducer from './reducers';
import createMiddleware from './middlewares';
import createMapStateToVnode from './view';

const create = options => {
  const {container} = options;

  const store = createStore(createReducer(options), {}, createMiddleware(options));
  const {dispatch} = store;

  const unsubscribe = store.subscribe(() =>
    pipe(createMapStateToVnode(options)(dispatch), vNode => {
      return render(vNode, container);
    })(store.getState())
  );

  return {
    dispatch,
    unsubscribe
  };
};

export {create}; // eslint-disable-line import/prefer-default-export
