import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 3.003H6c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-16c0-.55-.45-1-1-1zM17 3.003h-3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-16c0-.55-.45-1-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
