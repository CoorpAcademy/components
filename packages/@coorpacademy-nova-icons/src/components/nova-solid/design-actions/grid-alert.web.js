import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 16h4v4h-4zM4 16h4v4H4zM10 10h4v4h-4z" />
      <path d="M0 24h18V6H0v18zM2 8h14v14H2V8z" />
      <path d="M4 10h4v4H4zM20 0h2v6h-2z" />
      <circle cx={21} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
