import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M5 10.142V4.606l6 6.667V16h10v-3a1 1 0 0 0-1-1h-2V8a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v.283L4.743 1.332A.998.998 0 0 0 3 2v8.142A3.988 3.988 0 0 0 0 14c0 2.21 1.79 4 4 4s4-1.79 4-4a3.988 3.988 0 0 0-3-3.858zM13 8h3v3h-3V8z" />
      <path d="M21 17H11a3 3 0 0 0 0 6h10a3 3 0 0 0 0-6zm-10 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </g>
  </svg>
);

export default SvgComponent;
