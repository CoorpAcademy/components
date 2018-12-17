import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 10h4v4H4zM12 10h-2v4h2.78a2.979 2.979 0 0 1-.78-2v-2zM10 16h4v4h-4zM4 16h4v4H4z" />
      <path d="M16 22H2V8h10V6H0v18h18v-9h-2z" />
      <path d="M23 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6V6h6v5z" />
      <circle cx={19} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
