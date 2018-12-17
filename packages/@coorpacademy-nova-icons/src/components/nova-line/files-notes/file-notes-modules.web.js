import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 15h4v4H7zM13 15h4v4h-4zM10 9h4v4h-4z" />
      <path d="M19 2h-2V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H9V1a1 1 0 0 0-2 0v1H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM5 22V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2l.001 18H5z" />
    </g>
  </svg>
);

export default SvgComponent;
