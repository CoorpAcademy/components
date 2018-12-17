import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12.002} r={2} />
      <path d="M12 2.001L8 7.002h8zM12 22.001l-4-5h8zM22 12.002l-5-4v7.999zM2 12.002l5-4v7.999z" />
    </g>
  </svg>
);

export default SvgComponent;
