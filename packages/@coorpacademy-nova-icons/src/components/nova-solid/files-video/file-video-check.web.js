import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14.092V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h11.348A5.979 5.979 0 0 1 13 20.002a5.996 5.996 0 0 1 5-5.91zM12 1l5 5h-5V1zM5 9l8 4.003L5 17V9z" />
      <path d="M22.293 16.294L18 20.587l-2.293-2.293-1.414 1.414L18 23.415l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
