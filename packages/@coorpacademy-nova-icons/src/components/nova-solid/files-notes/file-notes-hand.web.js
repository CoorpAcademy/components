import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 18h-8.586l.293-.294a.998.998 0 0 0 0-1.413l-1-1a1.002 1.002 0 0 0-1.079-.222L5 16.522V23h11c.265 0 .52-.105.707-.294l3-3A.998.998 0 0 0 19 18zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zM21 1v3h-2V1h-3v3h-2V1h-2v13h11V1h-2zm-7 6h5v1h-5V7zm7 4h-7v-1h7v1z" />
    </g>
  </svg>
);

export default SvgComponent;
