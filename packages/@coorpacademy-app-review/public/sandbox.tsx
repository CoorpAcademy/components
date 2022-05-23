// -----------------------------------------------------------------------------

import React from 'react';
import {render} from 'react-dom';

import AppReview from '../src';
import type {AppOptions} from '../src';

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

const createSandbox = (options: SandboxOptions = {}) => {
  if (!options.container) {
    console.error('[AppReview sandbox] Requires a container.');
  }

  const container = document.getElementById(options.container);
  const appOptions: AppOptions = {
    token: process.env.API_TEST_TOKEN
  };

  render(<AppReview options={appOptions} />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}
