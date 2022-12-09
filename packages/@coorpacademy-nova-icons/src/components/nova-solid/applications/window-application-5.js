import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 110 2 1 1 0 110-2zM5 4a1 1 0 110 2 1 1 0 110-2zM2 8.002V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zm5 11.001H5v-5h2v5zm12 0H9v-2h10v2zm0-3H9v-2h10v2zm0-3H5v-2h14v2z" />
    </g>
  </svg>
);

export default SvgComponent;
