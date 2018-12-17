import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <path d="M17 13c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5zm-5 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      <path d="M13 11h-2v2.414l1.682 1.683 1.414-1.414L13 12.586z" />
    </g>
  </svg>
);

export default SvgComponent;
