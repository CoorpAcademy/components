import {createStore} from 'redux';
import get from 'lodash/fp/get';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from '@coorpacademy/components';
import {syncStoreWithHistory} from '@coorpacademy/redux-history';
import {Observable} from 'rxjs';
import {createBrowserHistory} from '@coorpacademy/history';
import createReducers from './create-reducers';
import createMiddleware from './middleware';
import {createRouter} from './router';

const createRenderer = (store, history, update, _createRouter, options) => {
  const state$ = Observable.create(observer =>
    store.subscribe(() => observer.next(store.getState()))
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

  const subscription = view$
    .map(vTree =>
      React.createElement(
        Provider,
        {
          ...options,
          dispatch: store.dispatch,
          history
        },
        vTree
      )
    )
    .map(update)
    .subscribe();

  if (module.hot) {
    module.hot.accept('./router.js', () => {
      subscription.unsubscribe();
      createRenderer(store, history, update, require('./router').createRouter, options);
    });
  }
};

/**
 * connectors: array
 * example :
 * const transifexConnector = _.partial(connectTransifex, window.Transifex)
 */
const prepareApp = (createReducer, routes, options, connectors = []) => {
  const history = createBrowserHistory();

  const store = createStore(
    createReducer(options),
    {lang: options.lang},
    createMiddleware(routes, {
      ...options,
      history
    })
  );

  syncStoreWithHistory(store, history);

  const update = vTree => {
    ReactDOM.render(vTree, options.container);
  };

  createRenderer(store, history, update, createRouter(routes), options);

  if (module.hot) {
    module.hot.accept('./reducers/index.js', () => {
      const newCreateReducer = require('./reducers').default;

      store.replaceReducer(newCreateReducer(options));
    });
  }
};

export {prepareApp, createReducers};
