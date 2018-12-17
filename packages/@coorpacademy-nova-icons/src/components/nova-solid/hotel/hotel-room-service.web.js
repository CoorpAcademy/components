import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 10V9A8 8 0 0 0 5 9v1H3v2h20v-2h-2zm-8-6.75v1.5A4.255 4.255 0 0 0 8.75 9h-1.5c0-3.17 2.58-5.75 5.75-5.75zM19 18h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1.004 1.004 0 0 0-1.079-.222L5 16.522V23h11c.265 0 .52-.105.707-.293l3-3A1 1 0 0 0 19 18zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
