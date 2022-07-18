// -----------------------------------------------------------------------------

import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';

import AppReview from '../src';
import type {AppOptions} from '../src/types/common';
import {Slide} from '../src/types/slides';
import freeText from './slides/free-text';
// import qcm from './slides/qcm';

// -----------------------------------------------------------------------------

type SandboxOptions = {
  container: string;
};

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    createSandbox?: (sandboxOptions: SandboxOptions) => void;
  }
}

const services = {
  fetchSkills: () => {
    return Promise.resolve([
      {
        skillRef: '_skill-ref',
        slidesToReview: 2,
        name: 'skill-test',
        custom: false
      },
      {
        skillRef: '_skill-ref-2',
        slidesToReview: 2,
        name: 'skill-test-2',
        custom: true
      }
    ]);
  },
  postProgression: () => {
    return Promise.resolve({
      _id: '62b1d1087aa12f00253f40ee',
      state: {
        pendingSlides: [],
        step: {
          current: 1
        },
        isCorrect: true,
        nextContent: {
          ref: 'sli_N1XACJobn',
          type: 'slide'
        }
      }
    });
  }
};

// -----------------------------------------------------------------------------

const selectedSlide: Slide = freeText;
// const selectedSlide: Slide = qcm;

// -----------------------------------------------------------------------------

const isContainerAvailable = (options: SandboxOptions): boolean =>
  !pipe(get('container'), isNil)(options);

const createSandbox = (options: SandboxOptions): void => {
  if (!isContainerAvailable(options)) {
    // eslint-disable-next-line no-console
    console.error('[AppReview sandbox] Requires a container.');
  } else {
    const container = document.getElementById(options.container);

    // mode mobile/web
    // userId + skill --> create progression --> 1st slide
    const appOptions: AppOptions = {
      token: process.env.API_TEST_TOKEN || '',
      slide: selectedSlide,
      templateContext: {
        plop: 'plip'
      },
      services
    };

    render(<AppReview options={appOptions} />, container);
  }
};

// -----------------------------------------------------------------------------

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}
