import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.998 8c0-.55.45-1 1-1h9V3c0-.55-.45-1-1-1h-15c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1v3l3-3h2V8z" />
      <path d="M20.998 9h-9c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h5l3 3v-3h1c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
