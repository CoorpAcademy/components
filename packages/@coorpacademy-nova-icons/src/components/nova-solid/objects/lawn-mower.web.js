import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <circle cx={9} cy={19} r={2} />
      <path d="M19 16c.353 0 .685.073 1 .184V15a1 1 0 0 0-1-1H7.848L5.986 2.836A1 1 0 0 0 5 2H2v2h2.152L5.82 14H3a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h1.184A2.966 2.966 0 0 1 6 19a3 3 0 0 1 6 0c0 .353-.072.685-.184 1h4.367A2.99 2.99 0 0 1 16 19a3 3 0 0 1 3-3z" />
      <circle cx={19} cy={19} r={2} />
      <path d="M18 12c0-1.654-1.346-3-3-3h-1V8h-2v1h-1c-1.654 0-3 1.346-3 3v1.001h10V12z" />
    </g>
  </svg>
);

export default SvgComponent;
