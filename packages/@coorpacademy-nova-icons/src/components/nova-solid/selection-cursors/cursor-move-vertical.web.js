import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12} r={2} />
      <path d="M12 2L8 7.001h8zM12 22l-4-5h8z" />
    </g>
  </svg>
);

export default SvgComponent;
