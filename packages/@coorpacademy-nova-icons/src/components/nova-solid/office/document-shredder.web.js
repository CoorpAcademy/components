import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.002 4h8v4h2V2h-12v6h2z" />
      <path d="M20 7v3H4V7H2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7h-2zm-9.998 9c0 1.654-1.346 3-3 3h-1v-2h1c.551 0 1-.448 1-1v-4h2v4zm3 3h-2v-7h2v7zm5 0h-1c-1.654 0-3-1.346-3-3v-4h2v4c0 .552.449 1 1 1h1v2z" />
    </g>
  </svg>
);

export default SvgComponent;
