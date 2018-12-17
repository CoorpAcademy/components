import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 20.001h9.537a5.966 5.966 0 0 1-1.537-4 5.998 5.998 0 0 1 4-5.651V1.001a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <path d="M20 12.001c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127a4.005 4.005 0 0 0 3-3.873c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
