import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2.001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M14.293 8.294L12 10.587 9.707 8.294 8.293 9.708l2.293 2.293-2.293 2.293 1.414 1.414L12 13.415l2.293 2.293 1.414-1.414-2.293-2.293 2.293-2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
