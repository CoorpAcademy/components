import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2.002H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zm-15 4h7v2H5v-2zm15 14H4l16-16v16z" />
      <path d="M12 16.002h2v2h2v-2h2v-2h-2v-2h-2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
