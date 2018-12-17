import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 4a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 6zm-4 8a2 2 0 1 1 .001-4.001A2 2 0 0 1 8 14zm4 4a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 18zm4-4a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14z"
    />
  </svg>
);

export default SvgComponent;
