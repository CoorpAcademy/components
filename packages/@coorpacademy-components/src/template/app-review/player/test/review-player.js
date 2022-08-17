import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import PlayerReview from '..';
import allOkFixture from './fixtures/all-ok';
import failFixture from './fixtures/one-fail';
import initialFixture from './fixtures/initial-state';

browserEnv({pretendToBeVisual: true});

const elementExists = foundElements => foundElements && foundElements[0];

test.serial('validate click test', async t => {
  const {container} = render(<PlayerReview {...initialFixture.props} key={0} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  const stackedSlidesContainer = container.querySelectorAll(
    '[data-name="stacked-slides-container"]'
  );
  t.truthy(elementExists(stackedSlidesContainer));

  const validateButton = container.querySelectorAll('[data-name="slide-validate-button-0"]');
  t.truthy(elementExists(validateButton));

  await act(async () => {
    await fireEvent.click(validateButton[0]);
  });

  t.pass();
});

test.serial('Next click test - success', async t => {
  const {container} = render(<PlayerReview {...allOkFixture.props} key={1} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  const stackedSlidesContainer = container.querySelectorAll(
    '[data-name="stacked-slides-container"]'
  );
  t.truthy(elementExists(stackedSlidesContainer));

  const nextButton = container.querySelectorAll('[data-name="next-question-button-4"]');
  t.truthy(elementExists(nextButton));

  await act(async () => {
    await fireEvent.click(nextButton[0]);
  });

  t.pass();
});

test.serial('Next click test - fail', async t => {
  const {container} = render(<PlayerReview {...failFixture.props} key={2} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  const stackedSlidesContainer = container.querySelectorAll(
    '[data-name="stacked-slides-container"]'
  );
  t.truthy(elementExists(stackedSlidesContainer));

  const nextButton = container.querySelectorAll('[data-name="next-question-button-2"]');
  t.truthy(elementExists(nextButton));

  await act(async () => {
    await fireEvent.click(nextButton[0]);
  });

  t.pass();
});
