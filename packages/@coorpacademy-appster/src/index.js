import {createStore} from 'redux';
import get from 'lodash/fp/get';
import {render} from 'react-dom';
import {connectHistory, navigate} from '@coorpacademy/redux-history';
import {Observable} from 'rxjs';
import {createHistory} from 'history';
import createMiddleware from './middleware';
import {createRouter} from './router';

const createRenderer = (store, history, update, _createRouter, options) => {
  const state$ = Observable.create(observer =>
    store.subscribe(() =>
      observer.next(store.getState())
    )
  ).startWith(store.getState());

  const Router = _createRouter({
    ...options,
    dispatch: store.dispatch,
    history
  });

  const view$ = state$.map(state => {
    const {params, view} = Router(get('route', state));
    return view({
      state,
      params
    });
  });

  return view$
    .map(update)
    .subscribe();
};

/**
 * connectors: array
 * example :
 * const transifexConnector = _.partial(connectTransifex, window.Transifex)
 */
const prepareApp = (createReducer, routes, options, connectors = []) => {
  const history = createHistory();

  const store = createStore(
    createReducer(),
    createMiddleware(routes, options)
  );

  const unconnectHistory = connectHistory(history, store);
  store.dispatch(navigate(history.getCurrentLocation()));

  const unconnections = connectors.map(connector => connector(store));

  const update = render(options.container);
  createRenderer(store, history, update, createRouter(routes), options);

  const unconnectEverything = () => {
    unconnectHistory();
    unconnections.forEach(unconnection => unconnection());
  };

  return {
    store,
    unconnectEverything
  };
};

export default prepareApp;
