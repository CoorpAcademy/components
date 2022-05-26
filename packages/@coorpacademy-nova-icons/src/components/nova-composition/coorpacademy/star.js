import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M8 0l1.888 6.111H16L11.056 9.89 12.944 16 8 12.223 3.056 16l1.888-6.111L0 6.11h6.112z"
      fillRule="nonzero"
    />
  </svg>
);

export default SvgComponent;
