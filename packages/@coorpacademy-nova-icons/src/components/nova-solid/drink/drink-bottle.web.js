import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2h4zM14 6h-4v1.607c-.633.715-2 2.48-2 4.393v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9c0-1.913-1.367-3.678-2-4.393V6z" />
    </g>
  </svg>
);

export default SvgComponent;
