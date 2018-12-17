import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 10V8h-2.5L12 2l-1.5 6H8v2zM7 11v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9H7zm8 8H9v-4h6v4z" />
    </g>
  </svg>
);

export default SvgComponent;
