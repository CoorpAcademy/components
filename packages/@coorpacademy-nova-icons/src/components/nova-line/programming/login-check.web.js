import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10} r={2} />
      <circle cx={12} cy={10} r={2} />
      <path d="M20 5H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h8v-2H4V7h16l-.002 5H22V7c0-1.103-.897-2-2-2zM16 17.586l-2-2L12.586 17l2.707 2.708a1 1 0 0 0 1.414 0L21.414 15 20 13.586l-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
