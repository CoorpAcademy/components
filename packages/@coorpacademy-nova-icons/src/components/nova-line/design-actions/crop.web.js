import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 21h2v2h-2zM18 21h2v2h-2zM15 21h2v2h-2zM12 21h2v2h-2zM9 21h2v2H9zM9 18h2v2H9zM21 18h2v2h-2zM21 15h2v2h-2zM21 12h2v2h-2zM21 9h2v2h-2zM18 9h2v2h-2zM16 14V3c0-1.102-.897-2-2-2H3c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2zM3 14V3h11l.001 11H3z" />
    </g>
  </svg>
);

export default SvgComponent;
