import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.003h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 0H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h7v-2H2v-2h7v-2H2V6h8v3h2V2a2 2 0 0 0-2-2zm0 4H2V2h8v2zM17 11c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4-1.795 4-4 4c-1.069 0-2.074-.416-2.779-1.119l-.047-.055L16 18h-5v5l1.758-1.758A5.95 5.95 0 0 0 17 23c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
