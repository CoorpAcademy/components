import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10.001} r={2} />
      <path d="M22.293 16.295L18 20.588l-2.293-2.293-1.414 1.414L18 23.416l5.707-5.707zM9 15.001l-2-2-3 4h9v-1.999l-2-4.001z" />
      <path d="M2 2h10v4h4v9.002h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h11v-2H2V2z" />
    </g>
  </svg>
);

export default SvgComponent;
