import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 12a3.95 3.95 0 0 0-2 .557V10c0-2.206 1.794-4 4-4h1V4H9c-3.309 0-6 2.691-6 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4zM17 12a3.95 3.95 0 0 0-2 .557V10c0-2.206 1.794-4 4-4h1V4h-1c-3.309 0-6 2.691-6 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
