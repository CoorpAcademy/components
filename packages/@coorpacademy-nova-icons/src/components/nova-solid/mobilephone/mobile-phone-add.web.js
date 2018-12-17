import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 17v1H6V6h8v.998l2-.004V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3.002L14 17z" />
      <path d="M23 11h-3V8h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
