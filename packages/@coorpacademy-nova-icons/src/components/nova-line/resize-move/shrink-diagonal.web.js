import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 15v-2h-6v6h2v-2.586l5.293 5.293 1.414-1.414L16.414 15zM9 7.586L3.707 2.293 2.293 3.707 7.586 9H5v2h6V5H9z" />
    </g>
  </svg>
);

export default SvgComponent;
