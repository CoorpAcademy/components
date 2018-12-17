import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M16 10v3h-1V3h-2v8h-1V1h-2v10H9V3H7v10H6v-3L4 8v8c0 3.867 3.134 7 7 7s7-3.133 7-7V8l-2 2zm-5 10c-2.762 0-5-3-5-3s2.238-3 5-3 5 3 5 3-2.238 3-5 3z" />
      <circle cx={11} cy={17} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
