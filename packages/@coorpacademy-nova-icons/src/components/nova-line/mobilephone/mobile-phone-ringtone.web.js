import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <path
      d="M19 13a1 1 0 0 1-1-1v-2a2 2 0 0 0-4 0v2a1 1 0 0 1-1 1v1h6v-1zM16 16a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1z"
      fill="currentColor"
    />
    <path
      d="M14 8V4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4V8h10zm-2-4v2H4V4h8zm0 14v2H4v-2h8z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
