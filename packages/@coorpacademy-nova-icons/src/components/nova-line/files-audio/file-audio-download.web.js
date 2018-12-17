import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 12.05a2.5 2.5 0 1 0 2 2.45V9.388l2.633.877.633-1.898L8 6.612v5.438z" />
      <path d="M2 2h10v4h4l.001 6H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-2H2V2zM22.293 17.293L20 19.586V14h-2v5.586l-2.293-2.293-1.414 1.414L19 23.414l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
