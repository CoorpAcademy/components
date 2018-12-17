import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 9h-1v2h1a1.001 1.001 0 0 0 0-2zM6 12H4v3H2V7h2v3h2V7h2v4.683l1-1V7.001h2c.499 0 .972.103 1.413.27L16.684 3H2C.9 3 0 3.901 0 5v12c0 .725.394 1.357.976 1.708L6 13.684V12z" />
      <path d="M22.309 3.032l1.361-1.361L22.256.256 1.22 21.293l1.414 1.415L6.341 19H22c1.1 0 2-.901 2-2V5c0-.993-.737-1.817-1.691-1.968zM11 15h-.659l4.603-4.603c.032.198.056.397.056.603 0 2.207-1.794 4-4 4zm11 0h-2.315l-1.168-2H18v2h-2V9.342l2.34-2.341H19c1.654 0 3 1.345 3 3a2.992 2.992 0 0 1-1.432 2.546L22 15z" />
    </g>
  </svg>
);

export default SvgComponent;
