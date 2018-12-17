import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={9} cy={10.001} r={1} />
      <circle cx={9} cy={14.001} r={1} />
      <circle cx={12} cy={10.001} r={1} />
      <circle cx={15} cy={10.001} r={1} />
      <path d="M18 2.001H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2v-16c0-1.104-.897-2-2-2zm0 16.998H6v-14h12v14z" />
    </g>
  </svg>
);

export default SvgComponent;
