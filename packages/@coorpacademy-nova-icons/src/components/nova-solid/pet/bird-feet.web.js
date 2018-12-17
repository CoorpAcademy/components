import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.375 12.219L8 14.92V10H6v4.92l-3.375-2.701-1.25 1.562L6 17.48V21h2v-3.52l4.625-3.699zM22.625 6.781l-1.25-1.562L18 7.92V3h-2v4.92l-3.375-2.701-1.25 1.562 4.625 3.7V14h2v-3.519z" />
    </g>
  </svg>
);

export default SvgComponent;
