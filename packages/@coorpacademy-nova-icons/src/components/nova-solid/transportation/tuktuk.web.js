import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 15a2 2 0 0 0-2 2V5a2 2 0 0 0-2-2h-1l-1-2h-4L9 3H8a2 2 0 0 0-2 2v12a2 2 0 0 0-4 0v3a2 2 0 0 0 4 0v-2a2 2 0 0 0 2 2h1v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h1a2 2 0 0 0 2-2v2a2 2 0 0 0 4 0v-3a2 2 0 0 0-2-2zM9.5 11.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM16 8H8V5h8v3z" />
      <path d="M12 15a2 2 0 0 0-2 2v3a2 2 0 0 0 4 0v-3a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
