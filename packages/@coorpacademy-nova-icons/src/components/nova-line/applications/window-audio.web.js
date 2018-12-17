import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M11 14.05a2.501 2.501 0 0 0-3 2.45 2.5 2.5 0 0 0 5 0v-4.113l2.632.878.633-1.898L11 9.612v4.438z" />
    </g>
  </svg>
);

export default SvgComponent;
