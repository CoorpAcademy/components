import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M6.275 9.396c-.732-.878-2.127-.037-1.692 1.021l5.704 11.616a2 2 0 1 0 3.426-2.065L6.275 9.396z" />
      <path d="M2 6c0-.551.449-1 1-1h6V3H3C1.346 3 0 4.346 0 6v9a1 1 0 0 0 1 1h4v-2H2V6zM21 3h-6v2h6c.551 0 1 .449 1 1v8h-8v2h9a1 1 0 0 0 1-1V6c0-1.654-1.346-3-3-3z" />
      <circle cx={12} cy={9} r={1} />
      <circle cx={15} cy={7} r={1} />
      <circle cx={12} cy={5} r={1} />
      <circle cx={18} cy={9} r={1} />
      <circle cx={15} cy={11} r={1} />
      <circle cx={12} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
