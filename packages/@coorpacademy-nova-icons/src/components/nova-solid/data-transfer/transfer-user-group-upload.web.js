import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 9.002h-2v2h2v6H5v-6h2v-2H5c-1.103 0-2 .896-2 2v8c0 1.102.897 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-8a2 2 0 0 0-2-2z"
    />
    <circle fill="currentColor" cx={5} cy={2.001} r={2} />
    <path fill="currentColor" d="M2 7.002a3 3 0 1 1 6 0H2z" />
    <circle fill="currentColor" cx={12} cy={2.001} r={2} />
    <path fill="currentColor" d="M9 7.002a3 3 0 1 1 6 0H9z" />
    <circle fill="currentColor" cx={19} cy={2.001} r={2} />
    <path
      fill="currentColor"
      d="M16 7.002a3 3 0 1 1 6 0h-6zM12 8.002l-3 3h2v3h2v-3h2z"
    />
  </svg>
);

export default SvgComponent;
