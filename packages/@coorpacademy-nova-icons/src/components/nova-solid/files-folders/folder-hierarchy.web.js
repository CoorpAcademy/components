import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 4l-1-2h-5v9h11V4zM16 13h-5v9h11v-7h-5z" />
      <circle cx={3} cy={3} r={1} />
      <circle cx={3} cy={7} r={1} />
      <circle cx={3} cy={11} r={1} />
      <circle cx={3} cy={15} r={1} />
      <circle cx={3} cy={19} r={1} />
      <circle cx={7} cy={19} r={1} />
      <circle cx={7} cy={7} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
