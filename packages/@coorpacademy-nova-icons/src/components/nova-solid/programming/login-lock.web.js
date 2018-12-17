import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10} r={2} />
      <path d="M20 5H4c-1.102 0-2 .898-2 2v6c0 1.102.897 2 2 2h9v-2H4V7h16v2h2V7c0-1.102-.896-2-2-2z" />
      <path d="M21 14v-.5c0-1.378-1.122-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5v.5c-.552 0-1 .449-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-3-.5a.5.5 0 0 1 1 0v.5h-1v-.5zm2 5.5h-3v-3h3v3z" />
      <circle cx={12} cy={10} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
