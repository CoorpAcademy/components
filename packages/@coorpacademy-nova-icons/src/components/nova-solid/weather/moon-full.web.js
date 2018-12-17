import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle fill="currentColor" cx={12} cy={12.002} r={10} />
  </svg>
);

export default SvgComponent;
