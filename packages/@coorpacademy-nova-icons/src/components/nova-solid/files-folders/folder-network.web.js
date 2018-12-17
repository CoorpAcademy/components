import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 5h-8l-1.447-1.894A2 2 0 0 0 8.764 2H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h7v3H8v2h8v-2h-3v-3h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
      <circle cx={19} cy={21} r={1} />
      <circle cx={5} cy={21} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
