import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M20 19v1c0 .551-.449 1-1 1h-3v-3h-2v3H9v-3H7v3H5c-.551 0-1-.449-1-1v-1H2v1c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-1h-2zM6 17h13a1 1 0 0 0 1-1c0-2.209-2-5-5-5h-3v-1H8V8h4V6H8V4h4V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8l-1 4a2 2 0 0 0 2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
