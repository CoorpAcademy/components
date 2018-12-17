import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 18H2V8h15.999l-.002 9H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h12v-2z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 18.995h6v2h-6z" />
  </svg>
);

export default SvgComponent;
