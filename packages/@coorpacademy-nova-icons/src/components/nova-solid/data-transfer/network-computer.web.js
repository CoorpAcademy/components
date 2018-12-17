import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 9.002h3v1H9v2h6v-2h-2v-1h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h6v3H9v-3zM10 13.002H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v1H3v2h6v-2H7v-1h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 5H3v-3h6v3zM22 13.002h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v1h-2v2h6v-2h-2v-1h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 5h-6v-3h6v3z" />
    </g>
  </svg>
);

export default SvgComponent;
