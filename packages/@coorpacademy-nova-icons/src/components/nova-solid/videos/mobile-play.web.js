import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 6.003v8l6-4z" />
      <path d="M19 1.003H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-18a2 2 0 0 0-2-2zm-5 20h-4v-2h4v2zm5-4H5v-14h14v14z" />
    </g>
  </svg>
);

export default SvgComponent;
