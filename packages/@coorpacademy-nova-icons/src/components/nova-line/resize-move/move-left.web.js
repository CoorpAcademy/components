import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 11H5.414l2.293-2.293-1.414-1.414L1.586 12l4.707 4.707 1.414-1.414L5.414 13H18zM20 4h2v16h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
