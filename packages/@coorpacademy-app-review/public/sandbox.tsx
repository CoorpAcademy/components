// -----------------------------------------------------------------------------

import React from 'react';
import {render} from 'react-dom';

import AppReview from '../src';
import type {AppOptions} from '../src';
import {Slide} from '../src/types/slide';
import freeText from './slides/free-text';
import qcm from './slides/qcm';

// -----------------------------------------------------------------------------

type SandboxOptions = {
  container?: string;
};

declare global {
  interface Window {
    createSandbox?: (SandboxOptions) => void;
  }
}

// -----------------------------------------------------------------------------

// const selectedSlide: Slide = freeText;
const selectedSlide: Slide = qcm;

// -----------------------------------------------------------------------------

const createSandbox = (options: SandboxOptions = {}) => {
  if (!options.container) {
    console.error('[AppReview sandbox] Requires a container.');
  }

  const container = document.getElementById(options.container);

  // mode mobile/web
  // userId + skill --> create progression --> 1st slide
  const appOptions: AppOptions = {
    token: process.env.API_TEST_TOKEN,
    slide: selectedSlide
  };

  render(<AppReview options={appOptions} />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}
