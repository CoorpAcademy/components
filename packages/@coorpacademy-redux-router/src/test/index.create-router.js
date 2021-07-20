import test from 'ava';
import {map, set, constant} from 'lodash/fp';
import {createRouter} from '..';

test('should return view function with params', t => {
  t.plan(1);

  const route = set('route.pathname', '/', {});
  const view = constant('I am a view');

  const router = createRouter([
    {
      path: '*',
      view
    }
  ]);

  t.deepEqual(router(route), {
    params: {0: '/'},
    view
  });
});

test('should support function as path', t => {
  t.plan(1);

  const route = set('route.pathname', '/foo', {});
  const path = constant({0: '/'});
  const view = constant(true);

  const router = createRouter([
    {
      path,
      view
    },
    {
      path,
      view
    }
  ]);

  t.deepEqual(router(route), {params: {0: '/'}, view});
});

test("should extract url's params", t => {
  t.plan(1);

  const route = set('route.pathname', '/foo', {});
  const view = constant(true);

  const router = createRouter([
    {
      path: '/:foo',
      view
    }
  ]);

  t.deepEqual(router(route), {params: {foo: 'foo'}, view});
});

test("should respect route's order", t => {
  t.plan(3);
  const view1 = constant(true);
  const view2 = constant(true);
  const view3 = constant(true);

  const router = createRouter([
    {
      path: '/:foo/:bar',
      view: view1
    },
    {
      path: '/:foo',
      view: view2
    },
    {
      path: '*',
      view: view3
    }
  ]);

  return Promise.all(
    map(
      ([pathname, res]) => t.deepEqual(router({route: {pathname}}), res),
      [
        ['/foo/bar', {view: view1, params: {foo: 'foo', bar: 'bar'}}],
        ['/foo', {view: view2, params: {foo: 'foo'}}],
        ['/', {view: view3, params: {0: '/'}}]
      ]
    )
  );
});

test('should ignore the route if its predicate returns false', t => {
  const view1 = constant(true);
  const view2 = constant(true);
  const view3 = constant(true);

  const router = createRouter([
    {
      path: '/admin',
      match: (_, state) => state.role === 'admin',
      view: view1
    },
    {
      path: '*',
      match: (_, state) => state.role === 'admin',
      view: view2
    },
    {
      path: '*',
      match: (_, state) => state.role !== 'admin',
      view: view3
    }
  ]);

  return Promise.all(
    map(
      ([state, res]) => t.deepEqual(router(state), res),
      [
        [
          {
            route: {pathname: '/admin'},
            role: 'admin'
          },
          {view: view1, params: {}}
        ],
        [
          {
            route: {pathname: '/admin'},
            role: 'user'
          },
          {view: view3, params: {0: '/admin'}}
        ],
        [
          {
            route: {pathname: '/'},
            role: 'admin'
          },
          {view: view2, params: {0: '/'}}
        ],
        [
          {
            route: {pathname: '/'},
            role: 'user'
          },
          {view: view3, params: {0: '/'}}
        ]
      ]
    )
  );
});
