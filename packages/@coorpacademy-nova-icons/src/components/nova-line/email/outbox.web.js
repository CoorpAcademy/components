import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 4.414V13h2V4.414l2.293 2.293 1.414-1.414L12 .586 7.293 5.293l1.414 1.414zM15.586 14l-2 2h-3.172l-2-2H2v8h20v-8h-6.414zM20 20H4v-4h3.586l2 2h4.828l2-2H20v4z" />
    </g>
  </svg>
);

export default SvgComponent;
