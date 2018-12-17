import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.555 22c.693 1.19 1.968 2 3.445 2s2.752-.81 3.445-2h-6.89zM15 17v-3.571a7.999 7.999 0 0 1-4.996-7.338A5.931 5.931 0 0 0 9 6a6 6 0 0 0-6 6v5a3 3 0 0 1-3 3v1h18v-1a3 3 0 0 1-3-3zM18 0c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4V2h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
