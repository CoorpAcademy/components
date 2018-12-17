import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.006h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.104.898-2 2-2h8c1.103 0 2 .896 2 2v10z" />
      <circle cx={8} cy={10.001} r={1} />
      <path d="M16 16.001h-3c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3v2h-3c-.551 0-1 .448-1 1v2c0 .552.449 1 1 1h3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
