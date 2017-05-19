import test from 'ava';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import {createRouter} from '..';

test('should call view funciton with options, dispatch, state and params', t => {
  t.plan(1);

  const options = {};

  const state = set('route.pathname', '/', {});
  const dispatch = () => {};

  const router = createRouter([
    {
      path: '*',
      // eslint-disable-next-line no-shadow
      view: options => dispatch => (state, params) => ({
        options,
        dispatch,
        state,
        params
      })
    }
  ])(options)(dispatch);

  t.deepEqual(router(state), {
    options,
    dispatch,
    state,
    params: {0: '/'}
  });
});

test('should support function as path', t => {
  t.plan(1);

  const state = set('route.pathname', '/foo', {});

  const router = createRouter([
    {
      path: () => false,
      // eslint-disable-next-line no-shadow
      view: () => () => (state, params) => params
    },
    {
      path: () => true,
      // eslint-disable-next-line no-shadow
      view: () => () => (state, params) => params
    }
  ])()();

  t.deepEqual(router(state), true);
});

test("should extract url's params", t => {
  t.plan(1);

  const state = set('route.pathname', '/foo', {});

  const router = createRouter([
    {
      path: '/:foo',
      // eslint-disable-next-line no-shadow
      view: () => () => (state, params) => params
    }
  ])()();

  t.deepEqual(router(state), {foo: 'foo'});
});

test("should respect route's order", t => {
  t.plan(3);

  const router = createRouter([
    {
      path: '/:foo/:bar',
      // eslint-disable-next-line no-shadow
      view: () => () => (state, params) => ({order: 0, params})
    },
    {
      path: '/:foo',
      // eslint-disable-next-line no-shadow
      view: () => () => (state, params) => ({order: 1, params})
    },
    {
      path: '*',
      // eslint-disable-next-line no-shadow
      view: () => () => (state, params) => ({order: 2, params})
    }
  ])()();

  return Promise.all(
    map(([pathname, params]) => t.deepEqual(router(set('route.pathname', pathname, {})), params), [
      ['/foo/bar', {order: 0, params: {foo: 'foo', bar: 'bar'}}],
      ['/foo', {order: 1, params: {foo: 'foo'}}],
      ['/', {order: 2, params: {0: '/'}}]
    ])
  );
});
