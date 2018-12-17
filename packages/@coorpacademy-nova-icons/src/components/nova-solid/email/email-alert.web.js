import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.581 18.813a1 1 0 0 1-1.162 0l-7.365-5.26A2.048 2.048 0 0 0 0 14v8c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2v-8a1.98 1.98 0 0 0-.054-.446l-7.365 5.259z" />
      <path d="M8 16.77l6.556-4.683A2.045 2.045 0 0 0 14 12H2c-.194 0-.378.037-.556.088L8 16.77zM19 3h2v6h-2z" />
      <circle cx={20} cy={11} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
