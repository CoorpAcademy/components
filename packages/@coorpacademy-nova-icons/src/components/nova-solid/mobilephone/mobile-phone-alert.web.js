import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.004h24v24H0z" />
    <g fill="currentColor">
      <path d="M10-.001H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-16c0-1.103-.897-2-2-2zm0 16H2v-12h8v12zM20 13.999h2v6h-2z" />
      <circle cx={21} cy={21.999} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
