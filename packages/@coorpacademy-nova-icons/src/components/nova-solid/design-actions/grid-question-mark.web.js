import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 10h4v4h-4zM4 10h4v4H4z" />
      <path d="M16 13.721V22H2V8h11.537a5.977 5.977 0 0 1-1.188-2H0v18h18V14h-1c-.365 0-.704-.106-1-.279z" />
      <path d="M4 16h4v4H4zM10 16h4v4h-4zM18 0c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.102-.897 2-2 2h-1v3h2V7.873A4.004 4.004 0 0 0 22 4c0-2.206-1.794-4-4-4z" />
      <circle cx={18} cy={11} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
