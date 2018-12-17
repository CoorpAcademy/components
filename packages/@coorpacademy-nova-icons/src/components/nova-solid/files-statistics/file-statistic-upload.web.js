import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.293 15.707L8 13.414l-3 3V17h7.294A6.998 6.998 0 0 1 18 12.081V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h10.683a6.962 6.962 0 0 1-.683-3V19H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293 1.414 1.413-3 3a.998.998 0 0 1-1.414.001zM12 6V1l5 5h-5zM19 14.587l-4.707 4.706 1.414 1.413L18 18.414v5.588h2v-5.588l2.293 2.292 1.414-1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
