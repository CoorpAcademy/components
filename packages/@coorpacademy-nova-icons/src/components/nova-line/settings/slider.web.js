import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 6V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H2v2h7v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8h7V6h-7zm-2 3h-2V5h2v4zM20 14a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H2v2h12v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2v-2h-2v-2zm-2 5h-2v-4h2v4z" />
    </g>
  </svg>
);

export default SvgComponent;
