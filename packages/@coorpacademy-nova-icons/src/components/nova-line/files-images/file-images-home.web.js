import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10.001} r={2} />
      <path d="M4 17.001h5v-2l-2-2z" />
      <path d="M2 2h10v4h4v4.001h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h7v-2H2V2zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.415l5.293 5.292 1.414-1.414-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
