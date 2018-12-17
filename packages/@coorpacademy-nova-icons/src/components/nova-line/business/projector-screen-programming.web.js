import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <path d="M11.707 15.293L9.414 13l2.293-2.293-1.414-1.414L6.586 13l3.707 3.707zM13.707 16.707L17.414 13l-3.707-3.707-1.414 1.414L14.586 13l-2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
