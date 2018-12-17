import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.001 18c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z" />
      <circle cx={11.751} cy={10.5} r={2.5} />
      <path d="M19.001 4h-1v2h1l.001 14H5.001V6h1V4h-1c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2z" />
      <path d="M14.001 3a2 2 0 0 0-4 0h-2v3h8V3h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
