import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.293 14.293l1.414 1.414L10.414 12 6.707 8.293 5.293 9.707 6.586 11H0v2h6.586zM18.707 9.707l-1.414-1.414L13.586 12l3.707 3.707 1.414-1.414L17.414 13H24v-2h-6.586z" />
    </g>
  </svg>
);

export default SvgComponent;
