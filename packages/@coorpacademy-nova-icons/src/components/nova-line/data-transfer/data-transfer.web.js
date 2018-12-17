import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 9.001h2v-7H9v2h3.586l-8.293 8.293 1.414 1.414L14 5.415zM19.707 11.708l-1.414-1.414L10 18.587v-4.586H8v8h8v-2h-4.586z" />
    </g>
  </svg>
);

export default SvgComponent;
