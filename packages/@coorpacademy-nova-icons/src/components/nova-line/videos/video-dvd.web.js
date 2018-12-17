import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 10v6l5-3z" />
      <path d="M15 5V3H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12v-2c4.411 0 8-3.589 8-8s-3.589-8-8-8zm-2 16H3V5h10v16zm2-10c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2v-4zm0 8v-2c2.206 0 4-1.794 4-4 0-2.205-1.794-4-4-4V7c3.309 0 6 2.691 6 6s-2.691 6-6 6z" />
    </g>
  </svg>
);

export default SvgComponent;
