import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import ScopeTabs from '..';
import fixture from './fixtures/without-status';

browserEnv();

test('should call onClick function', t => {
  t.plan(2);
  const onClick = () => {
    t.pass();
  };
  const {container} = render(<ScopeTabs {...fixture.props} onClick={onClick} />);

  const selector = container.querySelector(`[data-name="scopeTab"]`) as Element;
  t.truthy(selector);
  fireEvent.click(selector);
});
