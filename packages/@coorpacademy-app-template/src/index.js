import {createStore} from 'redux';
import {render} from 'react-dom';
import {syncStoreWithHistory} from '@coorpacademy/redux-history';
import {createBrowserHistory} from '@coorpacademy/history';
import pipe from 'lodash/fp/pipe';
import createReducer from './reducers';
import createMiddleware from './middlewares';
import createMapStateToVnode from './routes';

const create = options => {
  const {container} = options;

  const history = createBrowserHistory();

  const store = createStore(createReducer(options), {}, createMiddleware({...options, history}));
  const {dispatch} = store;

  const unsubscribe = store.subscribe(() =>
    pipe(createMapStateToVnode(options)(dispatch), vNode => {
      return render(vNode, container);
    })(store.getState())
  );

  syncStoreWithHistory(store, history);

  return {
    dispatch,
    unsubscribe
  };
};

export {create}; // eslint-disable-line import/prefer-default-export
