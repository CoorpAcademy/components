import browserEnv from 'browser-env';
import identity from 'lodash/fp/identity';
import test from 'ava';
import type {ExecutionContext} from 'ava';
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import {services} from '@coorpacademy/review-services-mocks';
import {WebContext} from '@coorpacademy/components/es/atom/provider';
import {appendVideoOptions} from '../../sandbox/options';
import type {AppOptions} from '../types/common';
import AppReview from '..';
import {sleep} from './utils/sleep';

browserEnv({pretendToBeVisual: true});

const elementExists = (foundElements: NodeListOf<Element>): Element =>
  foundElements && foundElements[0];

const LIMIT = 5;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  skillRef: 'skill_NJC0jFKoH',
  services,
  onQuitClick: identity,
  translate: identity,
  skin: {
    common: {
      primary: '#248e59'
    }
  },
  appendVideoOptions
};

test('should show the loader while the app is fetching the data', t => {
  t.plan(1);
  const {container} = render(
    <WebContext translate={identity}>
      <AppReview options={appOptions} />
    </WebContext>
  );

  const loader = container.querySelector('[data-name="loader"]');
  t.truthy(loader);

  // await waitFor(async () => {
  //   // await sleep(500);
  //   const result = await t.try(tt => {
  //     // rerender(<AppReview options={appOptions} />);

  //     const slidesContainer = container.querySelector('[data-name="slides-revision-container"]');

  //     tt.truthy(slidesContainer);
  //   });

  //   if (result.passed) return result.commit();
  //   result.discard();
  //   throw result.errors;
  // });

  // const stackedSlidesContainer = container.querySelector('[data-name="stacked-slides-container"]');

  // t.truthy(stackedSlidesContainer);

  // await clickAllSlides(t, container);
});
