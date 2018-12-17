import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 3V1h-2v2H8c-1.103 0-2 .896-2 2v15c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V5c0-1.104-.897-2-2-2zm0 2v4H8V5h8zM8 20v-9h8l.001 9H8z" />
      <circle cx={10} cy={14} r={1} />
      <circle cx={14} cy={14} r={1} />
      <circle cx={10} cy={17} r={1} />
      <circle cx={14} cy={17} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
