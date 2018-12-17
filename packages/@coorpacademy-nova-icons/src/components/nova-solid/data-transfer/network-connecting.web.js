import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12.002} r={1.25} />
      <circle cx={8.5} cy={12.002} r={1.25} />
      <circle cx={15.5} cy={12.002} r={1.25} />
      <path d="M6.293 16.708l-4.707-4.706 4.707-4.708 1.414 1.414-3.293 3.294 3.293 3.293zM17.707 16.708l-1.414-1.413 3.293-3.293-3.293-3.294 1.414-1.414 4.707 4.708z" />
    </g>
  </svg>
);

export default SvgComponent;
