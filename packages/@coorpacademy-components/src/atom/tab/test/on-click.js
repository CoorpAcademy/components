import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Tab from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call onClick with the targetContent value', t => {
  t.plan(3);
  const onClick = value => {
    t.is(value, 'foobar');
  };
  const {container} = render(
    <Tab {...defaultFixture.props} onClick={onClick} targetContent="foobar" />
  );

  const tab = container.querySelector('[data-name="tab"]');
  t.truthy(tab);
  fireEvent.click(tab);
  t.pass();
});
