import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import ReviewHeader from '..';
import defaultFixture from './fixtures/all-questions-ok';

browserEnv();

test('onQuitClick (close button onClick) should be reachable, should match given aria-label', t => {
  t.plan(7);
  let closeButtonWasClicked = false;
  defaultFixture.props = {
    ...defaultFixture.props,
    onQuitClick: () => {
      closeButtonWasClicked = true;
    }
  };
  const {container} = renderWithContext(<ReviewHeader {...defaultFixture.props} />);
  const headerWrapper = container.querySelector('[data-name="review-header"]') as Element;
  t.truthy(headerWrapper);
  const modeTitle = container.querySelector('[data-name="review-header-mode"]');
  t.truthy(modeTitle);
  const skillName = headerWrapper.querySelector('[data-name="review-header-skill-name"]');
  t.truthy(skillName);
  const closeButtonWrapper = headerWrapper.querySelector(
    '[data-testid="review-header-close-button-wrapper"]'
  );
  t.truthy(closeButtonWrapper);
  const closeButton = headerWrapper.querySelector(
    '[data-name="review-header-close-button"]'
  ) as Element;
  t.truthy(closeButton);
  fireEvent.click(closeButton);
  t.true(closeButtonWasClicked);
  t.pass();
});
