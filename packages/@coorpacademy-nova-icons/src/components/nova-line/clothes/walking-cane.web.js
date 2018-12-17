import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <g fill="currentColor">
      <path d="M14 20h2v2h-2zM12 2C9.795 2 8 3.795 8 6v1h2V6a2 2 0 0 1 4 0v13h2V6c0-2.205-1.795-4-4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
