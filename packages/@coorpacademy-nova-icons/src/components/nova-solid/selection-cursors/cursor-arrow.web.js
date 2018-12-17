import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M4 4.001L11 22l2-9 9-2z" />
  </svg>
);

export default SvgComponent;
