import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={7.003} r={5} />
      <path d="M9.365 13.486l.502 7.521C9.94 22.104 10.9 23.003 12 23.003s2.06-.898 2.133-1.996l.502-7.521a6.976 6.976 0 0 1-5.27 0zM13 17.003a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </g>
  </svg>
);

export default SvgComponent;
