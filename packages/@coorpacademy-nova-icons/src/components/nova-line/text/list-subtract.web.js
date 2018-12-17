import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={1} cy={3} r={1} />
      <path d="M4 2h14v2H4z" />
      <circle cx={1} cy={7} r={1} />
      <path d="M4 6h14v2H4z" />
      <circle cx={1} cy={11} r={1} />
      <path d="M4 10h14v2H4z" />
      <circle cx={1} cy={15} r={1} />
      <path d="M4 14h11v2H4zM17 17h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
