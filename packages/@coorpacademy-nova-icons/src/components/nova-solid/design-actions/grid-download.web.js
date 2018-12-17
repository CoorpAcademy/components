import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 16h4v4H4zM10 10h4v4h-4zM4 10h4v4H4zM10 16h4v4h-4z" />
      <path d="M16 22H2V8h10.683a6.925 6.925 0 0 1-.603-2H0v18h18V11.92a6.964 6.964 0 0 1-2-.602V22zM22.293 3.292L20 5.585V-.002h-2v5.587l-2.293-2.293-1.414 1.414L19 9.414l4.707-4.708z" />
    </g>
  </svg>
);

export default SvgComponent;
