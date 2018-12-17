import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.486 7H0l12.514 16h10.543L10.486 7zM4.058 9h5.457l9.428 12h-5.457L4.058 9zM18.707 9.294L16.414 7H22V5h-5.586l2.293-2.294-1.414-1.412L12.586 6l4.707 4.706z" />
    </g>
  </svg>
);

export default SvgComponent;
