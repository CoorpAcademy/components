import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 7.999v-2H4c-1.103 0-2 .897-2 2v12c0 1.104.897 2 2 2h12a2 2 0 0 0 2-2v-6h-2v6H4v-12h6z" />
      <path d="M21 2.999h-7v2h3.586L6.293 16.292l1.414 1.414L19 6.413v3.586h2z" />
    </g>
  </svg>
);

export default SvgComponent;
