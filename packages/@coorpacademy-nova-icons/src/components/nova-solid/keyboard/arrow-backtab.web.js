import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 11H10.414l2.293-2.293-1.414-1.414L6.586 12l4.707 4.706 1.414-1.413L10.414 13H22zM2 7h2v10H2z" />
    </g>
  </svg>
);

export default SvgComponent;
