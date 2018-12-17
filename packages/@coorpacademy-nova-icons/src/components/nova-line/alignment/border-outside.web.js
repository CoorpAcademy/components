import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 7h2v2h-2zM7 11h2v2H7zM11 11h2v2h-2zM11 15h2v2h-2zM15 11h2v2h-2z" />
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
    </g>
  </svg>
);

export default SvgComponent;
