import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 7H6v2h2v2h4v1H8v2h4v1H8c0 1.858 1.279 3.411 3 3.858V22h2v-3.142c1.721-.448 3-2 3-3.858V9h2V7zM11 6h2V5h2V3H9v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
