import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 12v11h4v-5a4 4 0 1 1 8 0v5h4V12l-8-4-8 4z" />
      <path d="M12 3L1 8v3l11-5 11 5V8z" />
    </g>
  </svg>
);

export default SvgComponent;
