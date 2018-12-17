import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 10h-4V8h4v2a8.98 8.98 0 0 1 3 .523V6H0v8c0 1.102.896 2 2 2h6.523c1.237-3.493 4.56-6 8.477-6zm-9 3H3v-2h5v2zm2-3H3V8h7v2zM20 2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v2h20V2z" />
      <path d="M17.707 12.293a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.415V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.585l1.293 1.292 1.414-1.414-6-6zM18 22h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
