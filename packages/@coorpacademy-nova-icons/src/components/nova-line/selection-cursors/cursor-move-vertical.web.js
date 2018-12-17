import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <circle cx={12} cy={12} r={2} fill="currentColor" />
    <path
      fill="currentColor"
      d="M15 7.415l-3-3-3 3L7.586 6 12 1.586 16.414 6zM12 22.415L7.586 18 9 16.586l3 3 3-3L16.414 18z"
    />
  </svg>
);

export default SvgComponent;
