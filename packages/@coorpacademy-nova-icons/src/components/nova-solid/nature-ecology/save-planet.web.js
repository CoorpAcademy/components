import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M19.5 1.945L19 3h-2v2h2v3l-2.125.875L16 11.5l-3.5-4.375.875-3.5V1.508A7.007 7.007 0 0 0 9 8c0 3.867 3.133 7 7 7s7-3.133 7-7a6.973 6.973 0 0 0-3.5-6.055zM19 18h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1.002 1.002 0 0 0-1.079-.222L5 16.522V23h11c.265 0 .52-.105.707-.293l3-3A1 1 0 0 0 19 18zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
