import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.998 15a2 2 0 0 1-1.999-1.999L11.998 13l.001-6H1.998c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-3h-3z" />
      <path d="M22.998 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.898-2 2-2zm3 9h-6V6h6v5z" />
      <circle cx={18.998} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
