import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 17.414V20h2v-6H4v2h2.586l-5.293 5.293 1.414 1.414zM21.293 1.293L16 6.586V4h-2v6h6V8h-2.586l5.293-5.293zM17.414 16H20v-2h-6v6h2v-2.586l5.293 5.293 1.414-1.414zM4 8v2h6V4H8v2.586L2.707 1.293 1.293 2.707 6.586 8z" />
    </g>
  </svg>
);

export default SvgComponent;
