import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2.001H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2v-16c0-1.104-.897-2-2-2zm0 2v1H6v-1h12zm0 3l.001 10H6v-10h12zm-12 13v-1h12.001v1H6z" />
      <circle cx={9} cy={9.999} r={1} />
      <circle cx={9} cy={12.999} r={1} />
      <circle cx={12} cy={9.999} r={1} />
      <circle cx={15} cy={9.999} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
