import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <circle cx={12} cy={8} r={2} />
      <circle cx={8} cy={12} r={2} />
      <circle cx={12} cy={16} r={2} />
      <circle cx={16} cy={12} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
