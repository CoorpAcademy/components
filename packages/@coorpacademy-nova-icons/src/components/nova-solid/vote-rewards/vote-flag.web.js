import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.293 22.707l-12-12 1.414-1.414 12 12zM21.707 8.293l-6-6a.999.999 0 0 0-1.414 0L12 4.586l-1.293-1.293a.999.999 0 0 0-1.414 0l-4 4a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0L14 11.414V14a1 1 0 0 0 1.641.768l6-5a.997.997 0 0 0 .066-1.475z" />
    </g>
  </svg>
);

export default SvgComponent;
