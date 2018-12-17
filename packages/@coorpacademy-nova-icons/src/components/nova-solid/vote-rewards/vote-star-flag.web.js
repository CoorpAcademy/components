import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.414 6L12 3.414 14.586 6h2.828l-4.707-4.707a.999.999 0 0 0-1.414 0L6.586 6h2.828zM4 7v10l8 5 8-5V7H4zm11 10l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2 1 3z" />
    </g>
  </svg>
);

export default SvgComponent;
