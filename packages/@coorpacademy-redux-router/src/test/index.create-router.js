import test from 'ava';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import {createRouter} from '..';

test('should return view funciton with params', t => {
  t.plan(1);

  // const options = {};

  const route = set('pathname', '/', {});
  // const dispatch = () => {};
  const view = () => 'I am a view';

  const router = createRouter([
    {
      path: '*',
      // eslint-disable-next-line no-shadow
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

  const route = set('pathname', '/foo', {});
  const path = () => ({0: '/'});
  const view = () => true;

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

  const route = set('pathname', '/foo', {});
  const view = () => true;

  const router = createRouter([
    {
      path: '/:foo',
      // eslint-disable-next-line no-shadow
      view
    }
  ]);

  t.deepEqual(router(route), {params: {foo: 'foo'}, view});
});

test("should respect route's order", t => {
  t.plan(3);
  const view1 = () => true;
  const view2 = () => true;
  const view3 = () => true;

  const router = createRouter([
    {
      path: '/:foo/:bar',
      // eslint-disable-next-line no-shadow
      view: view1
    },
    {
      path: '/:foo',
      // eslint-disable-next-line no-shadow
      view: view2
    },
    {
      path: '*',
      // eslint-disable-next-line no-shadow
      view: view3
    }
  ]);

  return Promise.all(
    map(([pathname, res]) => t.deepEqual(router({pathname}), res), [
      ['/foo/bar', {view: view1, params: {foo: 'foo', bar: 'bar'}}],
      ['/foo', {view: view2, params: {foo: 'foo'}}],
      ['/', {view: view3, params: {0: '/'}}]
    ])
  );
});
