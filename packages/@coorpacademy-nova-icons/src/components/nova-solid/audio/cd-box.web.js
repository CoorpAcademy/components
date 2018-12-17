import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6.003v12a2 2 0 0 0 2 2h1v-16H4a2 2 0 0 0-2 2zM20 4.003H7v16h13a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2zm-1 10a2 2 0 1 1-2-2V9.39l-4 1.334v4.279a2 2 0 1 1-2-2v-3a1 1 0 0 1 .684-.949l6-2A.998.998 0 0 1 19 8.003v6z" />
    </g>
  </svg>
);

export default SvgComponent;
