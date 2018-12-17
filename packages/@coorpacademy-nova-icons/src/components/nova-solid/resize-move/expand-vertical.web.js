import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.707 17.292l-5.293-5.293 5.293-5.293-1.414-1.414-6.707 6.707 6.707 6.707zM14.293 6.706l5.293 5.293-5.293 5.293 1.414 1.414 6.707-6.707-6.707-6.707z" />
    </g>
  </svg>
);

export default SvgComponent;
