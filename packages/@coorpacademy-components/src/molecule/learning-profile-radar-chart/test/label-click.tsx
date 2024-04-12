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

test('should get label and trigger click', t => {
  t.plan(2);
  const props = {...fixture.props, onClick: (ref: string) => t.is(ref, 'skillRef3')};
  const {container} = render(<LearningProfileRadarChart {...props} width={100} height={100} />);
  const label = container.querySelector('[data-name="Problem solving"]');
  t.truthy(label);
  fireEvent.click(label as Element);
});
