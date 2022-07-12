import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import {noop} from 'lodash/fp';
import Provider from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should re-render element when updating props', t => {
  t.plan(2);
  const history = {
    createHref: noop,
    push: noop
  };
  const {container, rerender} = render(
    <Provider {...defaultFixture.props}>
      <span data-name="foo">Foo</span>
    </Provider>
  );

  const foo = container.querySelector('[data-name="foo"]');
  t.truthy(foo);

  rerender(
    <Provider {...defaultFixture.props} history={history}>
      <div data-name="bar">Bar</div>
    </Provider>
  );

  const bar = container.querySelector('[data-name="bar"]');
  t.truthy(bar);
});
