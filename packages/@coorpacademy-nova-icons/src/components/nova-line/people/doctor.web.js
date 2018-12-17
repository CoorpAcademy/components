import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 11c-1.654 0-3-1.346-3-3H7c0 2.757 2.243 5 5 5s5-2.243 5-5h-2c0 1.654-1.346 3-3 3zM12 8c.883 0 1.67-.391 2.22-1H18V5h-3c0-1.654-1.346-3-3-3S9 3.346 9 5H6v2h3.78c.55.609 1.337 1 2.22 1zm0-4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zM15 18h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
      <path d="M12 14c-4.711 0-8 2.467-8 6v4h6v-2H6v-2c0-2.355 2.467-4 6-4s6 1.645 6 4v4h2v-4c0-3.533-3.289-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
