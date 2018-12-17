import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      d="M13 14h2v3c0 1.103-.897 2-2 2s-2-.897-2-2V8.858c1.72-.447 3-2 3-3.858 0-2.205-1.794-4-4-4S6 2.795 6 5c0 1.858 1.28 3.411 3 3.858V17c0 2.205 1.794 4 4 4s4-1.795 4-4V9l-4 5zM8 5c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
