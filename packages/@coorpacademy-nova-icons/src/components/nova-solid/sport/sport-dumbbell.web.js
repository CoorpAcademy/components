import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M19 5h-2a2 2 0 0 0-2 2v3H9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h6v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM22 9h2v4h-2zM0 9h2v4H0z" />
    </g>
  </svg>
);

export default SvgComponent;
