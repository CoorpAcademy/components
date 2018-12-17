import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 18h-8.586l.293-.294a.998.998 0 0 0 0-1.413l-1-1a1.002 1.002 0 0 0-1.079-.222L5 16.522V23h11c.265 0 .52-.105.707-.294l3-3A.998.998 0 0 0 19 18zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zM21 0h-7c-1.103 0-2 .898-2 2v9c0 1.102.897 2 2 2h7c1.103 0 2-.898 2-2V2c0-1.102-.897-2-2-2zm-7 3h4v1h-4V3zm6 7h-6V9h6v1zm0-3h-6V6h6v1z" />
    </g>
  </svg>
);

export default SvgComponent;
