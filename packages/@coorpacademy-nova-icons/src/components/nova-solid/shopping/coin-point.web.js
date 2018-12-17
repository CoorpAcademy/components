import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      <path d="M12 10h-1v2h1a1.001 1.001 0 0 0 0-2z" />
      <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 10h-1v2H9V8h3c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
