import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={7} cy={10} r={2} />
      <circle cx={12} cy={10} r={2} />
      <path d="M20 5H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h9v-2H4V7h16l-.002 5H22V7c0-1.103-.897-2-2-2z" />
      <path d="M20 13.586l-2 2-2-2L14.586 15l2 2-2 2L16 20.414l2-2 2 2L21.414 19l-2-2 2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
