import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import Select from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should unmount component', t => {
  const {container, unmount} = render(<Select {...defaultFixture.props} />);

  const labelWrapper = container.querySelector('[data-name="select-wrapper"]');
  t.truthy(labelWrapper);

  unmount();
});
