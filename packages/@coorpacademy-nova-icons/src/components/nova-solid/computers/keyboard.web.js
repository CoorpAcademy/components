import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 8h-9V7c0-.551.449-1 1-1h1c1.654 0 3-1.346 3-3V2h-2v1c0 .551-.449 1-1 1h-1c-1.654 0-3 1.346-3 3v1H2c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V10c0-1.104-.897-2-2-2zm-10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 8H8v-2h8v2zm-1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
