import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.007h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 15.999v2H4v-12h8v2h2v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4h-2z" />
      <path d="M10 14.999l3-6 3 6-3-2z" />
    </g>
  </svg>
);

export default SvgComponent;
