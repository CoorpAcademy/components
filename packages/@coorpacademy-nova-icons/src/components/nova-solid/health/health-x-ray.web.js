import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={4.5} r={3.5} />
      <path d="M11 16H9v-2h2v-2H8v-2h3V8H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v-2zM19 8h-6v2h3v2h-3v2h2v2h-2v2h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM10 22h4l.5-3h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
