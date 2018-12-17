import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 13.003c0 .366.106.705.278 1H6l4-1 2 2h10c1.104 0 2-.897 2-2v-7H4v7zM22 .003H6c-1.102 0-2 .897-2 2v2h20v-2c0-1.103-.896-2-2-2zM7 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM19 18.003h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1 1 0 0 0-1.078-.221L5 16.526v6.477h11c.266 0 .52-.105.707-.293l3-3A1 1 0 0 0 19 18.003zM3 15.003H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
