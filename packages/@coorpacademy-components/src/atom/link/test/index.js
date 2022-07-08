import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {once} from 'lodash/fp';
import Link from '..';

browserEnv();

test('should call listeners within props', t => {
  t.plan(7);

  const props = {
    onClick: once(() => t.pass()),
    onMouseEnter: once(() => t.pass()),
    onMouseLeave: once(() => t.pass())
  };

  const {container} = render(<Link {...props} />);
  const link = container.querySelector('[data-name="link"]');
  t.truthy(link);
  fireEvent.mouseEnter(link);
  t.truthy(link);
  fireEvent.click(link);
  t.truthy(link);
  fireEvent.mouseLeave(link);
  t.truthy(link);
});
