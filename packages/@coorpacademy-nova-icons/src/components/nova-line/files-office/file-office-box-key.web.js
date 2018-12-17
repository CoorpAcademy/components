import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.113 9L4.75 10.942V9H3v7h1.75v-1.942L6.113 16H8.25l-2.456-3.5L8.25 9zM18.375 11.188L17.5 9h-1.75l1.75 4.375h.013V16h1.75v-2.657L21 9h-1.75z" />
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <path d="M14.25 14.25h-3.5v-.875h2.625v-1.75H10.75v-.875h3.5V9H9.875A.875.875 0 0 0 9 9.875v5.25c0 .483.392.875.875.875h4.375v-1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
