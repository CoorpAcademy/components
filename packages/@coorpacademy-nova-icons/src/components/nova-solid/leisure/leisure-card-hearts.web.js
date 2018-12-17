import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M17 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zM6.001 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM11 15s-3-2.5-3-4c0-1 .672-2 1.5-2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12.5 9c.828 0 1.5 1 1.5 2 0 1.5-3 4-3 4zm5 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
