import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 8v6h4v-2h-2V8z" />
      <path d="M12 2a9.928 9.928 0 0 0-7.062 2.938L3 3v6h6L6.351 6.351A7.939 7.939 0 0 1 12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8v2c5.514 0 10-4.485 10-10S17.514 2 12 2z" />
    </g>
  </svg>
);

export default SvgComponent;
