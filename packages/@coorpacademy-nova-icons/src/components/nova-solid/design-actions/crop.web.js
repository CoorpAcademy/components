import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 1h15v15H1zM21 21h2v2h-2zM18 21h2v2h-2zM15 21h2v2h-2zM12 21h2v2h-2zM9 21h2v2H9zM9 18h2v2H9zM21 18h2v2h-2zM21 15h2v2h-2zM21 12h2v2h-2zM21 9h2v2h-2zM18 9h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
