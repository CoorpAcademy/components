import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.293 8.295L8 14.588 1.707 8.295.293 9.709l6.293 6.293-6.293 6.293 1.414 1.414L8 17.416l6.293 6.293 1.414-1.414-6.293-6.293 6.293-6.293zM23 5.002a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v2h4v1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v-2h-4v-1h3z" />
    </g>
  </svg>
);

export default SvgComponent;
