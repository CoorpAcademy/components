import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2-.005c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4.581L13.414-.005H2zm13 18l-12 .003v-2h2V6.995h2v9.002h1v-4.002h2v4.001h1V9.995h2v6h2v2zm-3-12v-5l5 5h-5zM20 13.996h2v6h-2z" />
      <circle cx={21} cy={21.991} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
