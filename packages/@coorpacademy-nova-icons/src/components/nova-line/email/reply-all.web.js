import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 12h-8.586l3.293-3.293-1.414-1.414L8.586 13l5.707 5.707 1.414-1.414L12.414 14H21z" />
      <path d="M10.707 8.707L9.293 7.293 3.586 13l5.707 5.707 1.414-1.414L6.414 13z" />
    </g>
  </svg>
);

export default SvgComponent;
