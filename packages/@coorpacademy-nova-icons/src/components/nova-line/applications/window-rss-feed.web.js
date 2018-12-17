import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <circle cx={8} cy={18} r={1} />
      <path d="M8 9v2c3.86 0 7 3.14 7 7h2c0-4.962-4.038-9-9-9z" />
      <path d="M8 13v2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5z" />
    </g>
  </svg>
);

export default SvgComponent;
