import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.065 18.757V23l4.243-4.243-2.121-2.121zM18.976 4.97a3.498 3.498 0 0 0-4.95 0l-8.839 8.838 4.95 4.95 8.839-8.839a3.5 3.5 0 0 0 0-4.949zm-2.411 3.973a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z" />
    </g>
  </svg>
);

export default SvgComponent;
