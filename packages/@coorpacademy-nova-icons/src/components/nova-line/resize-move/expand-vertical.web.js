import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 9h-6V4.414l1.293 1.293 1.414-1.414L12 .586 8.293 4.293l1.414 1.414L11 4.414V9H5v2h14zM19 15v-2H5v2h6v4.586l-1.293-1.293-1.414 1.414L12 23.414l3.707-3.707-1.414-1.414L13 19.586V15z" />
    </g>
  </svg>
);

export default SvgComponent;
