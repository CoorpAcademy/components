import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 17h-3V7c0-1.103-.897-2-2-2H7V2H5v3H2v2h3v10c0 1.103.897 2 2 2h10v3h2v-3h3v-2zM7 17V7h10v10H7z" />
      <circle cx={12} cy={12} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
