import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M4.084 5.892l9.812-1.93.428 1.996L16 4.298l-.527-2.684A2 2 0 0 0 13.124.038l-9.811 1.93a2 2 0 0 0-1.577 2.348l1.351 6.869L5 10.001l-.916-4.109zM5 24h10a2 2 0 0 0 2-2v-6l-2 1.5V20H5v-6H3v8a2 2 0 0 0 2 2z" />
      <path d="M22 6h-5l-5 6h3l-3 5 9-7h-4zM7 12l2-1 3 6z" />
    </g>
  </svg>
);

export default SvgComponent;
