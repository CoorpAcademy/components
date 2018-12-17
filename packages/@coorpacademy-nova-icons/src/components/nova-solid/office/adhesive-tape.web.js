import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 6a7 7 0 1 0 0 14A7 7 0 0 0 9 6zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM16 18l-2 2h6l2-2z" />
      <circle cx={9} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
