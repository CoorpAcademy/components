import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.004h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 13h-8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm-7 7h-1v-2h1v2zm7 0h-5v-2h5v2zm0-4h-8v-1h8v1z" />
      <path d="M12 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2H4v-2h4v-2H4V8h8v3h2V4a2 2 0 0 0-2-2zM4 6V4h8v2H4z" />
    </g>
  </svg>
);

export default SvgComponent;
