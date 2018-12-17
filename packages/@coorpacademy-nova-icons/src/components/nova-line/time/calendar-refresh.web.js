import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18H2V8h15.999v2H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h8v-2z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4a3.96 3.96 0 0 1-2.812-1.154l-.017-.018L17 19h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 24c3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
