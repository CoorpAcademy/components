import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 22C6.486 22 2 17.515 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M11 6h2v7h-2z" />
    <circle cx={12} cy={16} r={1.25} fill="currentColor" />
  </svg>
);

export default SvgComponent;
