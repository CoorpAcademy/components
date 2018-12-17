import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2.003a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 8.003z" />
      <circle cx={18} cy={6.003} r={1} />
      <path d="M17.063 12.354L14 13.503v-1.5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1.5l3.063 1.149c.516.193.937-.099.937-.649v-6c0-.55-.421-.842-.937-.649z" />
    </g>
  </svg>
);

export default SvgComponent;
