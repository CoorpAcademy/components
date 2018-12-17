import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <ellipse cx={12} cy={17} rx={6} ry={5} />
      <path d="M6 10a2 2 0 0 0-4 0v2a2 2 0 0 0 4 0v-2zM20 8a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2zM9 10a2 2 0 0 0 2-2V6a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2zM15 10a2 2 0 0 0 2-2V6a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
