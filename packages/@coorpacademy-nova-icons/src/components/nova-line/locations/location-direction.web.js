import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M12 3l-4 9 4-2 4 2zM12 12c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 1 0 6z" />
    </g>
  </svg>
);

export default SvgComponent;
