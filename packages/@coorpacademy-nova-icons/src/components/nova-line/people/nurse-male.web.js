import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 13c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM15 18h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
      <path d="M12 14c-4.711 0-8 2.467-8 6v4h6v-2H6v-2c0-2.355 2.467-4 6-4s6 1.645 6 4v4h2v-4c0-3.533-3.289-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
