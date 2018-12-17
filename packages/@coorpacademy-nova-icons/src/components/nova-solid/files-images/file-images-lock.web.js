import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 9.081V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-3H3l3-4 2 2 4-5 .549 1.281A7 7 0 0 1 18 9.081zM5.5 13A2.498 2.498 0 0 1 3 10.5a2.499 2.499 0 1 1 5 0A2.5 2.5 0 0 1 5.5 13zM12 6V1l5 5h-5z" />
      <path d="M23 15.001c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .897 2 2h-4c0-1.103.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={18.999} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
