import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1h4zM7.773 17A2.98 2.98 0 0 0 7 19c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3a2.98 2.98 0 0 0-.773-2H7.773zM14 5h-4C8.402 5 7 6.636 7 8.5c0 .967.389 1.854.977 2.5h8.047A3.74 3.74 0 0 0 17 8.5C17 6.636 15.598 5 14 5zM7.791 12A2.959 2.959 0 0 0 7 14c0 .769.295 1.469.773 2h8.453A2.977 2.977 0 0 0 17 14c0-.774-.307-1.469-.791-2H7.791z" />
    </g>
  </svg>
);

export default SvgComponent;
