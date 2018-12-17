import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M12 16c3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7S5 5.141 5 9c0 3.86 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM7 19h4v3h2v-3h4v-2H7z" />
      <circle cx={14} cy={11} r={1} />
      <circle cx={15} cy={8} r={1} />
      <circle cx={10} cy={11} r={1} />
      <circle cx={12} cy={6} r={1} />
      <circle cx={12} cy={9} r={1} />
      <circle cx={9} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
