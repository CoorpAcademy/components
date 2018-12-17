import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.293 9.706l1.293 1.293H15v2h4.586l-1.293 1.293 1.414 1.414 3.707-3.707-3.707-3.707zM5.707 14.292l-1.293-1.293H9v-2H4.414l1.293-1.293-1.414-1.414-3.707 3.707 3.707 3.707zM11 6.999h2v10h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
