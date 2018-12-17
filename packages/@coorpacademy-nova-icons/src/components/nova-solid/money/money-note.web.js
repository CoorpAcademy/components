import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 4H1v14h20V4zM8 16l-5-5V6h11l5 5v5H8z" />
      <circle cx={11} cy={11} r={3} />
      <path d="M22 8v11H5v2h19V8z" />
    </g>
  </svg>
);

export default SvgComponent;
