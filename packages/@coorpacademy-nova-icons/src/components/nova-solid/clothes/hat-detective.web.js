import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M14 5v3c0 1.654-1.346 3-3 3V9c.551 0 1-.449 1-1V5.766A2.987 2.987 0 0 0 10 5c-3.72 0-4.674 5.781-4.917 9h13.834C18.674 10.781 17.72 5 14 5z" />
      <path d="M20 13c0 1.44-.56 2-2 2H6c-1.551 0-2-.449-2-2H2c0 2.654 1.346 4 4 4h12c2.542 0 4-1.458 4-4h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
