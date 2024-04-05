import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import {LearningProfileRadarChart} from '..';
import fixture from './fixtures/hexagon';

browserEnv();

global.ResizeObserver = class MockedResizeObserver {
  observe = () => noop(null);

  unobserve = () => noop(null);

  disconnect = () => noop(null);
};

test('should get dot and trigger click', t => {
  t.plan(4);
  const props = {...fixture.props, onClick: () => t.pass()};
  const {container} = render(<LearningProfileRadarChart {...props} width={100} height={100} />);
  const [dot1, dot2] = container.querySelectorAll('[data-name="dataset-1"]');
  t.truthy(dot1);
  fireEvent.click(dot1 as Element);
  t.truthy(dot2);
  fireEvent.click(dot2 as Element);
});
