import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.707 14.293l-1.414 1.414L19.586 18H2v2h17.586l-2.293 2.293 1.414 1.414L23.414 19z" />
      <path d="M7 10h2v6h2V2h2v14h2V2h3V0H7C4.243 0 2 2.243 2 5s2.243 5 5 5zm0-8h2v6H7C5.346 8 4 6.654 4 5s1.346-3 3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
