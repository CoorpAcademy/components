import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <circle cx={12} cy={12} r={2} fill="currentColor" />
    <path
      fill="currentColor"
      d="M18 16.415L16.586 15l3-3-3-3L18 7.586 22.414 12zM6 16.415L1.586 12 6 7.586 7.414 9l-3 3 3 3z"
    />
  </svg>
);

export default SvgComponent;
