import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 12.082V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h10.682A6.963 6.963 0 0 1 12 19.002c0-3.526 2.609-6.434 6-6.92zM12 1l5 5h-5V1zM5 17V9l8 4.002L5 17zM19 14.586l-4.707 4.708 1.414 1.412L18 18.415v5.587h2v-5.587l2.293 2.291 1.414-1.412z" />
    </g>
  </svg>
);

export default SvgComponent;
