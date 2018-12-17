import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={18.005} r={1} />
      <circle cx={6} cy={21.005} r={1} />
      <circle cx={11.5} cy={18.005} r={1} />
      <circle cx={9.5} cy={21.005} r={1} />
      <circle cx={15} cy={18.005} r={1} />
      <circle cx={13} cy={21.005} r={1} />
      <path d="M15 2.005a6.964 6.964 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.647l-.817.575C9.678 6.459 8.393 6.005 7 6.005c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.861-3.14-7-7-7z" />
    </g>
  </svg>
);

export default SvgComponent;
