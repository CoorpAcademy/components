import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14V9A6 6 0 106 9v5a3 3 0 01-3 3v1h18v-1a3 3 0 01-3-3zM8.555 19c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89z" />
    </g>
  </svg>
);

export default SvgComponent;
