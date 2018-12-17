import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M22 15v-3a1 1 0 0 0-1-1c-1.104 0-2-.898-2-2V3a1 1 0 0 0-1-1h-4v4a2 2 0 0 1-4 0V2H6a1 1 0 0 0-1 1v6c0 1.102-.897 2-2 2a1 1 0 0 0-1 1v3h3v2H2v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4h-3v-2h3zm-12 4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6zm3-2h-2v-2h2v2zm5 2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6z"
    />
  </svg>
);

export default SvgComponent;
