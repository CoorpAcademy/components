import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .005h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 4H4a2 2 0 0 0-2 2v3h2V6h3V4zM20 4h-3v2h3v3h2V6a2 2 0 0 0-2-2zM4 20h3v-2H4v-3H2v3a2 2 0 0 0 2 2zM20 18h-3v2h3a2 2 0 0 0 2-2v-3h-2v3zM17 9H7v6h10V9zm-2 4H9v-2h6v2z" />
    </g>
  </svg>
);

export default SvgComponent;
