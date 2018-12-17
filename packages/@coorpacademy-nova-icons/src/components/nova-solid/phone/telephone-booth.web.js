import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 22h18v2H3zM5.001 21h14V8h1V6h-1v-.414l-.293-.293c-4.37-4.37-9.044-4.37-13.414 0l-.293.293V6h-1v2h1v13zM13 8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2zM7.001 8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
