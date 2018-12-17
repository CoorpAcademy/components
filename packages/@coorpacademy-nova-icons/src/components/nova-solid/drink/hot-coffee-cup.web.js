import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 7H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8.005 21.1A1 1 0 0 0 9 22h6a1 1 0 0 0 .995-.9l.91-9.1h-9.81l.91 9.1zM12 14a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 14zM10.678 6L8.929 1.628l-1.858.744L8.523 6z" />
    </g>
  </svg>
);

export default SvgComponent;
