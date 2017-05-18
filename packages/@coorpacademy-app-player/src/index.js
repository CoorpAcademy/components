import {createStore} from 'redux';
import {render} from 'react-dom';
import pipe from 'lodash/fp/pipe';
import createReducer from './reducers';
import createMiddleware from './middlewares';
import createMapStateToVnode from './view';
import {selectProgression} from './actions/ui';

const create = options => {
  const {container, progression} = options;

  const store = createStore(createReducer(options), {}, createMiddleware(options));
  const {dispatch} = store;

  const unsubscribe = store.subscribe(() =>
    pipe(createMapStateToVnode(options)(dispatch), vNode => {
      return render(vNode, container);
    })(store.getState())
  );

  dispatch(selectProgression(progression));

  return {
    dispatch,
    unsubscribe
  };
};

export {create}; // eslint-disable-line import/prefer-default-export
