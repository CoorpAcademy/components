import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M16 2.838V6h-3v3h3v3l-3 1-2 5-5-3V9l3-2V2.459C4.943 3.734 2 7.523 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-4.1-2.47-7.619-6-9.162z"
    />
  </svg>
);

export default SvgComponent;
