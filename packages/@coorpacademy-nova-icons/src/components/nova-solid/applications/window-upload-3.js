import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 0H4C2.898 0 2 .896 2 2v2.002h20V2a2 2 0 00-2-2zM5 3a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zM2 16c0 1.103.898 2 2 2h2.09c.478-2.836 2.939-5 5.91-5a5.996 5.996 0 015.91 5H20c1.104 0 2-.897 2-2V5.002H2V16z" />
      <path d="M7.293 19.293l1.414 1.413L11 18.414V24h2v-5.586l2.293 2.292 1.414-1.413L12 14.586z" />
    </g>
  </svg>
);

export default SvgComponent;
