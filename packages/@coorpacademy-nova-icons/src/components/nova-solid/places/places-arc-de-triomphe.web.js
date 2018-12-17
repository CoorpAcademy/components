import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M2 7v2h1v7h5v-1a4 4 0 0 1 8 0v1h5V9h1V7H2zM20 3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3h16V3zM2 17v2h1v3h5v-3h1v-2zM15 17v2h1v3h5v-3h1v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
