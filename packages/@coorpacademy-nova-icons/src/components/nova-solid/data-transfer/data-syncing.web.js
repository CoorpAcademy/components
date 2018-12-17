import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 8.001h7.586l-2.293 2.293 1.414 1.414 4-4a.999.999 0 0 0 0-1.414l-4-4-1.414 1.414 2.293 2.293H8c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4zM20 12.001c0 2.205-1.795 4-4 4H8.414l2.293-2.293-1.414-1.414-4 4a.999.999 0 0 0 0 1.414l4 4 1.414-1.414-2.293-2.293H16c3.309 0 6-2.691 6-6h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
