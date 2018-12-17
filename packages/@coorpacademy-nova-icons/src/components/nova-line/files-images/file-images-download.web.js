import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10.001} r={2} />
      <path d="M9 15.001l-2-2-3 4h8v-4l-1-2z" />
      <path d="M16 6v6.002h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-2H2V2h10v4h4zM22.293 17.293L20 19.586V14h-2v5.586l-2.293-2.293-1.414 1.414L19 23.414l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
