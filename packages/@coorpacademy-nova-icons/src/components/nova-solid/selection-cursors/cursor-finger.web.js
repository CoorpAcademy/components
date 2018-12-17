import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.275 12.04L13 10.247V3.001a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v8H5a1 1 0 0 0-.95 1.317l3 9c.138.409.519.683.95.683h9c.459 0 .859-.312.971-.757l2-8a1 1 0 0 0-.696-1.204z"
    />
  </svg>
);

export default SvgComponent;
