import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M16.5 15l.5 1H3l2-4h7v-2H4l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-1.143-2H16.5zM7 20H2v-2h5v2zm11 0h-5v-2h5v2z" />
      <path d="M23 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6V6h6v5z" />
      <circle cx={19} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
