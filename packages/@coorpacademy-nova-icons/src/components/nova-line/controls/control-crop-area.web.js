import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.293 17.293L17 19.586V17h-2v2.586l-2.293-2.293-1.414 1.414L16 23.414l4.707-4.707zM3 8h3v2H3zM15 13h2v-3a2 2 0 0 0-2-2h-5v2h5v3z" />
      <path d="M9 14V4.414l2.293 2.293 1.414-1.414L8 .586 3.293 5.293l1.414 1.414L7 4.414V14a2 2 0 0 0 2 2h12v-2H9z" />
    </g>
  </svg>
);

export default SvgComponent;
