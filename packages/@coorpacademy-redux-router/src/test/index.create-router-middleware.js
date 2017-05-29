import test from 'ava';
import map from 'lodash/fp/map';
import {createRouterMiddleware} from '..';

const LOCATION = 'location';
const createLocation = pathname => ({type: LOCATION, payload: {pathname}});

test('should dispatch action', t => {
  t.plan(2);

  const routerMiddleware = createRouterMiddleware(
    [
      {
        path: '*',
        action: params => params
      }
    ],
    LOCATION
  );

  const locationAction = createLocation('/');

  return routerMiddleware({
    dispatch: action => t.deepEqual({0: '/'}, action)
  })(action => t.is(locationAction, action))(locationAction);
});

test('should support function as path', t => {
  t.plan(2);

  const routerMiddleware = createRouterMiddleware(
    [
      {
        path: () => false,
        action: params => params
      },
      {
        path: () => true,
        action: params => params
      }
    ],
    LOCATION
  );

  const locationAction = createLocation();

  return routerMiddleware({
    dispatch: action => t.deepEqual(true, action)
  })(action => t.is(locationAction, action))(locationAction);
});

test("should extract url's params", t => {
  t.plan(2);

  const routerMiddleware = createRouterMiddleware(
    [
      {
        path: '/:foo',
        action: params => params
      }
    ],
    LOCATION
  );

  const locationAction = createLocation('/foo');

  return routerMiddleware({
    dispatch: action => t.deepEqual({foo: 'foo'}, action)
  })(action => t.is(locationAction, action))(locationAction);
});

test("shouldn't dispatch action", t => {
  t.plan(1);

  const routerMiddleware = createRouterMiddleware(
    [
      {
        path: '/:foo',
        action: params => params
      }
    ],
    LOCATION
  );

  const otherAction = {type: 'other'};

  return routerMiddleware({
    dispatch: () => t.fail()
  })(action => t.is(otherAction, action))(otherAction);
});

test("should respect route's order", t => {
  t.plan(6);

  const routerMiddleware = createRouterMiddleware(
    [
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
    ],
    LOCATION
  );

  return Promise.all(
    map(
      ([pathname, params]) => {
        const locationAction = createLocation(pathname);
        return routerMiddleware({
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
