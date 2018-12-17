import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .005h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 18.414V21h2v-6H3v2h2.586L.293 22.293l1.414 1.414zM17 3h-2v6h6V7h-2.586l5.293-5.293L22.293.293 17 5.586zM21 17v-2h-6v6h2v-2.586l5.293 5.293 1.414-1.414L18.414 17zM3 7v2h6V3H7v2.586L1.707.293.293 1.707 5.586 7z" />
      <circle cx={12} cy={12} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
