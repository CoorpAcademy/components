import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 18.001H6v-16h10v8.994h2V1.001a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h10v-2zm-7 0H2v-16h2v16z" />
      <path d="M18 12.001l1.714 4.286H24l-3.708 3.13 1.993 4.584L18 21.167l-4.286 2.834 1.994-4.584L12 16.287h4.285z" />
    </g>
  </svg>
);

export default SvgComponent;
