import {createStore} from 'redux';
import {render} from 'react-dom';
import pipe from 'lodash/fp/pipe';
import createReducer from './reducers';
import createMiddleware from './middlewares';
import createMapStateToVnode from './views';
import {fetchDiscussionAction} from './actions/api-fetch-discussion';

const create = options => {
  const {container} = options;

  const store = createStore(createReducer(options), {}, createMiddleware(options));
  const {dispatch, getState} = store;

  const unsubscribe = store.subscribe(
    pipe(getState, createMapStateToVnode(options)(dispatch), vNode => {
      return render(vNode, container);
    })
  );

  dispatch(fetchDiscussionAction());

  return {
    dispatch,
    unsubscribe
  };
};

export {create}; // eslint-disable-line import/prefer-default-export
