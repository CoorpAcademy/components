import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24h-24z" />
    <g fill="currentColor">
      <circle cx={8} cy={17} r={1} />
      <circle cx={16} cy={17} r={1} />
      <path d="M21 8h2v4h-2zM1 8h2v4H1zM18 3H6c-1.103 0-2 .896-2 2v16a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0V5c0-1.104-.897-2-2-2zM6 9h12v4H6V9zm12 10H6v-4h12v4zM6 7V5h12v2H6z" />
    </g>
  </svg>
);

export default SvgComponent;
