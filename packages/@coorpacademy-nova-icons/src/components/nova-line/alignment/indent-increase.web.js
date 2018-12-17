import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 3h18v2H2zM2 7h12v2H2zM2 11h12v2H2zM2 15h12v2H2zM2 19h18v2H2zM16 18l6-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
