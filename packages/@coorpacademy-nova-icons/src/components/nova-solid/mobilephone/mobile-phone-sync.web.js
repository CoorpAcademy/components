import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 14l2.5-4 3.5 1.5 4-1.5-3.5 4-3.5-1.5z" />
      <path d="M20.001 4H15a2 2 0 0 0-2 2v3.369h2V8h5v8h-5v-1h-2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6c0-1.106-.895-2-1.999-2zM9 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3H9v1H4V8h5v1.369h2V6a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
