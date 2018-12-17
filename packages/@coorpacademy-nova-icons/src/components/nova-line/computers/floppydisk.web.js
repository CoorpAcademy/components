import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19 21H5c-1.103 0-2-.897-2-2V5c0-1.104.897-2 2-2h9.586c.534 0 1.036.208 1.414.586L20.414 8c.373.372.586.888.586 1.414V19c0 1.103-.897 2-2 2zM5 5v14h14.001L19 9.414 14.586 5H5z"
      fill="currentColor"
    />
    <path
      d="M12 18c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
      fill="currentColor"
    />
    <g fill="currentColor">
      <path d="M13 7h2v3h-2zM7 7h4v3H7z" />
    </g>
  </svg>
);

export default SvgComponent;
