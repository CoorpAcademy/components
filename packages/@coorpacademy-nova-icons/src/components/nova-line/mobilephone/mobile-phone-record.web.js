import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <circle cx={17} cy={12} r={1} />
      <path d="M17 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 17 14z" />
      <path d="M14 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4H4V8h10zm-2-4v2H4V4h8zm0 14v2H4v-2h8z" />
    </g>
  </svg>
);

export default SvgComponent;
