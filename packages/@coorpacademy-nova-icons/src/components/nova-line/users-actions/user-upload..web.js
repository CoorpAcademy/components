import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.002 16.007c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4zm0-6a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zM8.002 17.007c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6zm-5.841 5c.599-1.808 2.834-3 5.842-3s5.243 1.192 5.842 3H2.161zM21.709 5.3L17.002.593 12.295 5.3l1.414 1.414 2.293-2.293v5.587h2V4.421l2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
