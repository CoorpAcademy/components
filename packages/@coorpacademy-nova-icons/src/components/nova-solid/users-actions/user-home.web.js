import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.002 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4zM8.002 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6zM17.709.299a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414 1.293-1.293v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.42l1.293 1.293 1.414-1.414-6-6zm.293 9.707h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
