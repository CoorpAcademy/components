import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24h-24z" />
    <g fill="currentColor">
      <circle cx={9} cy={17} r={1} />
      <circle cx={15} cy={17} r={1} />
      <path d="M4 5h2v2H4zM18 5h2v2h-2z" />
      <path d="M22 2H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v3.5c0 .827.673 1.5 1.5 1.5S8 22.327 8 21.5V21h8v.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V18h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM7 15h10v4H7v-4zm.477-2l1.2-3h6.646l1.2 3H7.477zM21 16h-2v-2a.999.999 0 0 0-.071-.371l-2-5A1.002 1.002 0 0 0 16 8H8c-.409 0-.776.249-.929.629l-2 5A.999.999 0 0 0 5 14v2H3V4h18v12z" />
    </g>
  </svg>
);

export default SvgComponent;
