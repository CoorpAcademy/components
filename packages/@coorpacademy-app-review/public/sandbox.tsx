// -----------------------------------------------------------------------------

import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';

import AppReview from '../src';
import type {AppOptions} from '../src/types/common';
import {WithRequired} from '../src/types/utils';
// import {Slide} from '../src/types/slides';
// import freeText from './slides/free-text';
// import qcm from './slides/qcm';

// -----------------------------------------------------------------------------

type SandboxOptions = {
  container?: string;
};

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    createSandbox?: (sandboxOptions: SandboxOptions) => void;
  }
}

// -----------------------------------------------------------------------------

// const selectedSlide: Slide = freeText;
// const selectedSlide: Slide = qcm;

// -----------------------------------------------------------------------------

const isContainerAvailable = (
  options: SandboxOptions
): options is WithRequired<SandboxOptions, 'container'> => !pipe(get('container'), isNil)(options);

const createSandbox = (options: SandboxOptions = {}): void => {
  if (!isContainerAvailable(options)) {
    // eslint-disable-next-line no-console
    console.error('[AppReview sandbox] Requires a container.');
  } else {
    const container = document.getElementById(options.container);

    // mode mobile/web
    // userId + skill --> create progression --> 1st slide
    const appOptions: AppOptions = {
      token: process.env.API_TEST_TOKEN || ''
      // slide: selectedSlide
    };

    render(<AppReview options={appOptions} />, container);
  }
};

// -----------------------------------------------------------------------------

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}
