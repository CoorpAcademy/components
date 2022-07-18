import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import qcm from './slides/qcm';

import AppReview from '../src';
import type {AppOptions, Services} from '../src/types/common';

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

const services: Services = {
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
  fetchSlide: (ref) => {
    // return Promise.resolve(qcm); // why acm does not look like a slide returned from mooc ?
    return Promise.resolve({
      question: {
        content: {
          choices: [
            {
              selected: false,
              title: 'choix1',
              help: '(help choix1)',
              ariaLabel: '__ariaLabel1',
              onClick: () => {}
            },
            {
              selected: false,
              title: 'choix2',
              help: '(help choix2)',
              ariaLabel: '__ariaLabel2',
              onClick: () => {}
            },
            {
              selected: false,
              title: 'choix3',
              help: '(help choix3)',
              ariaLabel: '__ariaLabel3',
              onClick: () => {}
            }
          ]
        }
      },
      klf: '___klf',
      universalRef: ref
    });
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
      templateContext: {},
      services
    };

    render(<AppReview options={appOptions} />, container);
  }
};

// -----------------------------------------------------------------------------

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}
