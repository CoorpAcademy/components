import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {identity, noop} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import {LearningProfileRadarChart} from '..';
import fixture from './fixtures/hexagon';

browserEnv();
const translate = identity;

global.ResizeObserver = class MockedResizeObserver {
  observe = () => noop(null);

  unobserve = () => noop(null);

  disconnect = () => noop(null);
};

test('should get label and trigger click', t => {
  t.plan(2);
  const props = {...fixture.props, onClick: (ref?: string) => t.is(ref, 'skillRef3')};
  const {container} = renderWithContext(
    <LearningProfileRadarChart {...props} width={100} height={100} />,
    {
      context: {translate}
    }
  );
  const label = container.querySelector('[data-name="Problem solving"]');
  t.truthy(label);
  fireEvent.click(label as Element);
});
