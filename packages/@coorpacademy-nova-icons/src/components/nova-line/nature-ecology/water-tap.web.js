import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={17} cy={16} r={1} />
      <circle cx={15} cy={18.5} r={1} />
      <circle cx={19} cy={18.5} r={1} />
      <circle cx={17} cy={21} r={1} />
      <circle cx={13} cy={21} r={1} />
      <circle cx={21} cy={21} r={1} />
      <path d="M14 13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7c0-1.104-.897-2-2-2h-6V3h3V1H6v2h3v2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11v2zM4 9V7h13v5h-1v-2a1 1 0 0 0-1-1H4z" />
    </g>
  </svg>
);

export default SvgComponent;
