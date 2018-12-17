import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M20 11c0 1.44-.561 2-2 2V9c0-3.309-2.691-6-6-6S6 5.691 6 9v4c-1.439 0-2-.56-2-2H2c0 2.542 1.458 4 4 4h12c2.542 0 4-1.458 4-4h-2zm-8-6c2.205 0 4 1.795 4 4v1H8V9c0-2.205 1.795-4 4-4zm-4 8v-1h8v1H8zM10 19h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
