import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 15.004h-1v-3H8v3H7v-7H5v7H4v2h10v-2h-1v-5h-2z" />
      <path d="M2 .002c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4.587L13.414.002H2zm14.001 20H2v-18h10v4h4l.001 14zM20 14.002h2v6h-2z" />
      <circle cx={21} cy={22.002} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
