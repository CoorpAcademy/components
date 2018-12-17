import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 5H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h6v-2H4V7h16v8c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
      <circle cx={7} cy={10} r={2} />
      <circle cx={12} cy={10} r={2} />
      <circle cx={17} cy={10} r={2} />
      <path d="M16 23l1-5 5-1-10-4z" />
    </g>
  </svg>
);

export default SvgComponent;
