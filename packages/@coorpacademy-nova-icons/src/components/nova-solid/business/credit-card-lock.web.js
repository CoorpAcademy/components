import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM15.408 10H13V8h4v1.294A7.03 7.03 0 0 1 19 9c.34 0 .672.033 1 .08V6H0v8c0 1.102.896 2 2 2h10a6.99 6.99 0 0 1 3.408-6zM8 13H3v-2h5v2zm2-3H3V8h7v2z" />
      <path d="M22.999 15c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
