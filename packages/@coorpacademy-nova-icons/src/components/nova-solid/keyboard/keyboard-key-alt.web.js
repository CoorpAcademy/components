import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 9.998h2V12H5z" />
      <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 16H7v-2H5v2H3V8.998a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V16zm6 0h-5V8h2v6h3v2zm6-6h-2v6h-2v-6h-2V8h6v2z" />
    </g>
  </svg>
);

export default SvgComponent;
