import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M8.555 20c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89zM18 15v-4h-6V4a6 6 0 0 0-6 6v5a3 3 0 0 1-3 3v1h18v-1a3 3 0 0 1-3-3z"
    />
    <path fill="currentColor" d="M22 9h-8.081l4-5H14V2h8.081l-4 5H22z" />
  </svg>
);

export default SvgComponent;
