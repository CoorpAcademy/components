import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.414 3H7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6.586L19.414 3zM18 8V4l4 4h-4z" />
      <path d="M3 6H1v13c0 1.103.897 2 2 2h15v-2H3V6z" />
    </g>
  </svg>
);

export default SvgComponent;
