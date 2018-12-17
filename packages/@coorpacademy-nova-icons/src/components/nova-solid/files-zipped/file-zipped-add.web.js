import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a5.98 5.98 0 0 1 2-4.463V2zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
