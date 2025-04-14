import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent} from '@testing-library/react';
import ProgressWrapper from '..';
import {renderWithContext} from '../../../util/render-with-context';
import progressWrapperWithNoBadge from './fixtures/no-badge';

browserEnv();

test.afterEach(() => {
  cleanup();
});

test('should display details on toggle click', t => {
  t.plan(3);
  const context = {
    translate: (key: string) => key
  };
  const {container} = renderWithContext(<ProgressWrapper {...progressWrapperWithNoBadge.props} />, {
    context
  });
  const toggleButton = container.querySelector(
    '[data-testid=progress-wrapper-toggle-details-button]'
  ) as Element;
  t.truthy(toggleButton);

  const details = container.querySelector('[data-testid=progress-wrapper-details]') as HTMLElement;
  t.truthy(details);

  t.true(details.className.includes('progress-wrapper__hiddenDetails'));

  fireEvent.click(toggleButton);

  setTimeout(() => {
    t.true(details.className.includes('progress-wrapper__visibleDetails'));
  }, 0);
});
