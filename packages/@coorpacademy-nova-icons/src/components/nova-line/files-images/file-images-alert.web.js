import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 0C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4.586L13.414 0H2zm14.001 20H2V2h10v4h4l.001 14z" />
      <path d="M9 15.001l-2-2-3 4h10l-3-6z" />
      <circle cx={7} cy={10.001} r={2} />
      <path d="M20 14h2v6h-2z" />
      <circle cx={21} cy={22} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
