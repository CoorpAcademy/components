import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path fill="currentColor" d="M3 11.001h18v2H3z" />
  </svg>
);

export default SvgComponent;
