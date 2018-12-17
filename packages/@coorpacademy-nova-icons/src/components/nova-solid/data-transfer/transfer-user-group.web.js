import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 9.002H5c-1.103 0-2 .896-2 2v8c0 1.102.897 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-8a2 2 0 0 0-2-2zm0 2l-.002 6H5v-6h14z" />
      <circle cx={5} cy={3.001} r={2} />
      <path d="M5 5.002a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
      <circle cx={12} cy={2.001} r={2} />
      <path d="M12 4.002a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
      <circle cx={19} cy={3.001} r={2} />
      <path d="M19 5.002a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
