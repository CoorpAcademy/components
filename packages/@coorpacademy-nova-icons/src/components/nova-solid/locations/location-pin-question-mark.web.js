import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.127V13h-2v-2h1c1.103 0 2-.898 2-2 0-1.102-.897-2-2-2s-2 .898-2 2H8c0-2.206 1.794-4 4-4s4 1.794 4 4a4.007 4.007 0 0 1-3 3.873z"
    />
  </svg>
);

export default SvgComponent;
