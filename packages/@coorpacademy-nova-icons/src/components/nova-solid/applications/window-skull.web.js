import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={10} cy={14.003} r={1} />
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2z" />
      <circle cx={14} cy={14.003} r={1} />
      <path d="M2 8.002V19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2zm13 8.631v1.37a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.37a3.988 3.988 0 0 1-1-2.63c0-2.206 1.795-4 4-4s4 1.794 4 4a3.99 3.99 0 0 1-1 2.63z" />
    </g>
  </svg>
);

export default SvgComponent;
