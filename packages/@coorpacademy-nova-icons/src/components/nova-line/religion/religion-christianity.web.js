import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M7 15h10v2H7zM21 18H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-1 3H4v-1h16v1zM11 14h2V8h3V6h-3V3h-2v3H8v2h3z" />
    </g>
  </svg>
);

export default SvgComponent;
