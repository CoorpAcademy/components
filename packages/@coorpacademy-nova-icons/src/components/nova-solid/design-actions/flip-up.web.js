import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.773 5H16V3l-3 3 3 3V7h.773C20 7 20 9.258 20 10v1h2v-1c0-3.13-1.954-5-5.227-5zM20 12H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
      <path d="M4 4h5v6h2V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h2v-2H4V4z" />
    </g>
  </svg>
);

export default SvgComponent;
