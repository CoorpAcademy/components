// -----------------------------------------------------------------------------

import React from 'react';
import { render } from 'react-dom';

import AppReview from '../src'

// -----------------------------------------------------------------------------

const createSandbox = (options = {}) => {
  if (!options.container) {
    console.error('[AppReview sandbox] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(<AppReview />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}
