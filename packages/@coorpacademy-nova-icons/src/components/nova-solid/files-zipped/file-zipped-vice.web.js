import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 8h4v2h-4zM15 12h4v2h-4zM12 6h7V4h-9V3h1V1H7v2h1v1H4v4h8zM19 22v-6h-7v-2H4v4h4v2H7v2h4v-2h-1v-2h5v4h-2v2h8v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
