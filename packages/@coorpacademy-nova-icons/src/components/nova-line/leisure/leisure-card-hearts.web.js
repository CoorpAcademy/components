import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M17 2H5c-1.103 0-2 .896-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2zm0 18H5V4h12v16z" />
      <circle cx={7} cy={6} r={1} />
      <circle cx={15} cy={18} r={1} />
      <path d="M11 15s3-2.5 3-4c0-1-.672-2-1.5-2s-1.5.672-1.5 1.5c0-.828-.671-1.5-1.5-1.5S8 10 8 11c0 1.5 3 4 3 4z" />
    </g>
  </svg>
);

export default SvgComponent;
