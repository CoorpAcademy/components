import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <g fill="currentColor">
      <circle cx={12} cy={21.5} r={2.5} />
      <circle cx={12} cy={9.5} r={2.5} />
      <circle cx={18.5} cy={9.5} r={2.5} />
      <circle cx={5.5} cy={9.5} r={2.5} />
      <circle cx={15.5} cy={15.5} r={2.5} />
      <circle cx={8.5} cy={15.5} r={2.5} />
      <path d="M11 0h2v5h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
