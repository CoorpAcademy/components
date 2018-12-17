import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 22V9.414l2.293 2.293 1.414-1.414L12 5.586l-4.707 4.707 1.414 1.414L11 9.414V22zM4 2h16v2H4z" />
    </g>
  </svg>
);

export default SvgComponent;
