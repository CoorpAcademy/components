import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 2H7c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm0 2l-.001 4H7V4h10zM7 20V10h9.999l-.002 10H7z" />
      <circle cx={9} cy={12} r={1} />
      <circle cx={12} cy={12} r={1} />
      <circle cx={15} cy={12} r={1} />
      <path d="M14 5h2v2h-2z" />
      <circle cx={9} cy={15} r={1} />
      <circle cx={12} cy={15} r={1} />
      <circle cx={15} cy={15} r={1} />
      <circle cx={9} cy={18} r={1} />
      <circle cx={12} cy={18} r={1} />
      <circle cx={15} cy={18} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
