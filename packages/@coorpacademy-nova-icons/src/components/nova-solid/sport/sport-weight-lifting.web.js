import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 5h-3a2 2 0 0 0-2 2v3H7v2a2 2 0 0 0 2 2l-1 7h8l-1-7 1-1V7a2 2 0 0 0-2-2z" />
      <path d="M8 7H5V4H1v8h4V9h3zM19 4v3h-2v2h2v3h4V4z" />
    </g>
  </svg>
);

export default SvgComponent;
