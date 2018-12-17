import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <path d="M2 2h2v2h2V2h8l.001 8H16V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V2z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.069 0-2.074-.416-2.78-1.119l-.047-.054L17 19h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 24c3.309 0 6-2.69 6-6 0-3.309-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
