import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={16.5} r={1.5} />
      <path d="M17 11H9V8c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V8c0-2.757-2.243-5-5-5S7 5.243 7 8v3c-1.103 0-2 .898-2 2v7c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zM7 20v-7h10l.001 7H7z" />
    </g>
  </svg>
);

export default SvgComponent;
