import browserEnv from 'browser-env';
import test from 'ava';
import type {ExecutionContext} from 'ava';
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import type {AppOptions} from './types/common';
import AppReview from '.';

browserEnv({pretendToBeVisual: true});

const elementExists = (foundElements: NodeListOf<Element>): Element =>
  foundElements && foundElements[0];

const sleep = (msToSleep: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, msToSleep);
  });

const waitForChanges = async (msToWait = 3000): Promise<void> => {
  await act(async () => {
    await sleep(msToWait); // wait *just* a little longer than the timeout in the component
  });
};

const LIMIT = 5;

const clickAllSlides = async (
  t: ExecutionContext<unknown>,
  container: HTMLElement,
  accumulator = 0
): Promise<void> => {
  if (accumulator === LIMIT) return;

  // last one needs to wait for more calculations && components updates
  if (accumulator === 4)
    await act(async () => {
      await sleep(1000);
    });

  const validateButton = container.querySelectorAll(
    `[data-name="slide-validate-button-${accumulator}"]`
  );
  t.truthy(elementExists(validateButton));

  await act(async () => {
    await fireEvent.click(validateButton[0]);
  });

  const nextButton = container.querySelectorAll(
    `[data-name="next-question-button-${accumulator}"]`
  );
  t.truthy(elementExists(nextButton));

  await act(async () => {
    await fireEvent.click(nextButton[0]);
  });

  await clickAllSlides(t, container, accumulator + 1);
};

const appOptions: AppOptions = {
  token: process.env.API_TEST_TOKEN || '',
  templateContext: {
    theme: {color: {primary: '#123'}}
  },
  skillRef: 'skill_NJC0jFKoH'
};

test('should validate all the slides (all correct scenario)', async t => {
  t.plan(13);
  const {container} = render(<AppReview options={appOptions} key={0} />);
  await waitForChanges(1000);

  const wrapper = container.querySelector('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  const stackedSlidesContainer = wrapper?.querySelector('[data-name="stacked-slides-container"]');

  t.truthy(stackedSlidesContainer);

  await clickAllSlides(t, container);

  t.pass();
});
