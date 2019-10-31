import test from 'ava';
import map from 'lodash/fp/map';
import {LOCATION} from '@coorpacademy/redux-history';
import {createRouterMiddleware} from '..';

const createLocation = pathname => ({type: LOCATION, payload: {pathname}});

test('should dispatch action', t => {
  t.plan(2);

  const routerMiddleware = createRouterMiddleware([
    {
      path: '*',
      action: params => params
    }
  ]);

  const locationAction = createLocation('/');

  return routerMiddleware({
    getState: () => ({route: {pathname: '/'}}),
    dispatch: action => t.deepEqual({0: '/'}, action)
  })(action => t.is(locationAction, action))(locationAction);
});

test('should support function as path', t => {
  t.plan(2);

  const routerMiddleware = createRouterMiddleware([
    {
      path: () => false,
      action: params => params
    },
    {
      path: () => true,
      action: params => params
    }
  ]);

  const locationAction = createLocation();

  return routerMiddleware({
    getState: () => ({route: {pathname: '/'}}),
    dispatch: action => t.deepEqual(true, action)
  })(action => t.is(locationAction, action))(locationAction);
});

test("should extract url's params", t => {
  t.plan(2);

  const routerMiddleware = createRouterMiddleware([
    {
      path: '/:foo',
      action: params => params
    }
  ]);

  const locationAction = createLocation('/foo');

  return routerMiddleware({
    getState: () => ({route: {pathname: '/'}}),
    dispatch: action => t.deepEqual({foo: 'foo'}, action)
  })(action => t.is(locationAction, action))(locationAction);
});

test('should no matched route', t => {
  t.plan(1);

  const routerMiddleware = createRouterMiddleware([
    {
      path: '/foo',
      action: params => params
    }
  ]);

  const locationAction = createLocation('/bar');

  return routerMiddleware({
    getState: () => ({route: {pathname: '/'}}),
    dispatch: () => t.fail()
  })(action => t.is(locationAction, action))(locationAction);
});

test("shouldn't dispatch action", t => {
  t.plan(1);

  const routerMiddleware = createRouterMiddleware([
    {
      path: '/:foo',
      action: params => params
    }
  ]);

  const otherAction = {type: 'other'};

  return routerMiddleware({
    getState: () => ({route: {pathname: '/'}}),
    dispatch: () => t.fail()
  })(action => t.is(otherAction, action))(otherAction);
});

test("should respect route's order", t => {
  t.plan(6);

  const routerMiddleware = createRouterMiddleware([
    {
      path: '/:foo/:bar',
      action: params => ({order: 0, params})
    },
    {
      path: '/:foo',
      action: params => ({order: 1, params})
    },
    {
      path: '*',
      action: params => ({order: 2, params})
    }
  ]);

  return Promise.all(
    map(
      ([pathname, params]) => {
        const locationAction = createLocation(pathname);
        return routerMiddleware({
          getState: () => ({pathname}),
          dispatch: action => t.deepEqual(params, action)
        })(action => t.is(locationAction, action))(locationAction);
      },
      [
        ['/foo/bar', {order: 0, params: {foo: 'foo', bar: 'bar'}}],
        ['/foo', {order: 1, params: {foo: 'foo'}}],
        ['/', {order: 2, params: {0: '/'}}]
      ]
    )
  );
});

test('should ignore the route if its predicate returns false', t => {
  const routerMiddleware = createRouterMiddleware([
    {
      path: '/admin',
      match: (_, state) => state.role === 'admin',
      action: params => ({order: 0, params})
    },
    {
      path: '*',
      match: (_, state) => state.role === 'admin',
      action: params => ({order: 1, params})
    },
    {
      path: '*',
      match: (_, state) => state.role !== 'admin',
      action: params => ({order: 2, params})
    }
  ]);

  return Promise.all(
    map(
      ([state, params]) => {
        const locationAction = createLocation(state.route.pathname);
        return routerMiddleware({
          getState: () => state,
          dispatch: action => t.deepEqual(params, action)
        })(action => t.is(locationAction, action))(locationAction);
      },
      [
        [
          {
            route: {pathname: '/admin'},
            role: 'admin'
          },
          {order: 0, params: {}}
        ],
        [
          {
            route: {pathname: '/admin'},
            role: 'user'
          },
          {order: 2, params: {0: '/admin'}}
        ],
        [
          {
            route: {pathname: '/'},
            role: 'admin'
          },
          {order: 1, params: {0: '/'}}
        ],
        [
          {
            route: {pathname: '/'},
            role: 'user'
          },
          {order: 2, params: {0: '/'}}
        ]
      ]
    )
  );
});
